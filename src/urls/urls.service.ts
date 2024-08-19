import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import {
  BASE62_CHARACTERS,
  URLS_REPOSITORY,
} from '../common/constants/constants';
import { Repository, IsNull } from 'typeorm';
import { Url } from './entities/url.entity';

@Injectable()
export class UrlsService {
  constructor(
    @Inject(URLS_REPOSITORY)
    private readonly _urlRepository: Repository<Url>,
  ) {}

  /**
   * Creates a short URL from a given original URL. If the URL already exists in the database,
   * it returns the existing shortened version.
   *
   * @param {CreateUrlDto} createUrlDto - Data Transfer Object for creating a URL.
   * @returns {Promise<{id: number; shortUrl: string}>} - An object containing the ID and the shortened URL.
   */
  async create({
    originalUrl,
  }: CreateUrlDto): Promise<{ id: number; shortUrl: string }> {
    const urlExists = await this._urlRepository.findOne({
      where: {
        originalUrl,
        userId: IsNull(),
      },
    });

    if (urlExists) {
      const { id, hash } = urlExists;
      return {
        id,
        shortUrl: `${process.env.API_DOMAIN}:${process.env.APP_PORT}/${hash}`,
      };
    }

    const hash = await this.getValidHash();
    const newUrl = this._urlRepository.create({
      originalUrl,
      hash,
    });

    const urlSaved = await this._urlRepository.save(newUrl);
    const shortUrl = `${process.env.API_DOMAIN}:${process.env.APP_PORT}/${hash}`;

    return { shortUrl, id: urlSaved.id };
  }

  /**
   * Retrieves the original URL associated with a given hash.
   *
   * @param {string} hash - The hash part of the short URL.
   * @returns {Promise<{url: string}>} - An object containing the original URL.
   */
  async getOriginalUrlByHash(hash: string): Promise<{ url: string }> {
    try {
      if (!hash || hash.length === 0) return null;

      const where = { where: { hash } };
      const url = await this._urlRepository.findOneOrFail(where);

      this.increaseClickCount(url.id);

      return { url: url.originalUrl };
    } catch (error) {
      throw new NotFoundException(`URL not found.`);
    }
  }

  /**
   * Increments the click count of a URL by 1.
   *
   * @param {number} urlId - The ID of the URL to be incremented.
   */
  async increaseClickCount(urlId: number): Promise<void> {
    const url = await this._urlRepository.findOneOrFail({
      where: { id: urlId },
    });

    url.clickCount += 1;
    await this._urlRepository.save(url);
  }

  /**
   * Generates a valid hash that is not currently in use.
   *
   * @returns {Promise<string>} - A valid unused hash.
   */
  async getValidHash(): Promise<string> {
    let hashValid = '';

    while (hashValid.length === 0) {
      const hash = this.generateHash();
      const isInUse = await this.hashInUse(hash);
      if (!isInUse) {
        hashValid = hash;
        break;
      }
    }

    return hashValid;
  }

  /**
   * Generates a random hash of a specified length using base62 characters.
   *
   * @param {number} length - The desired length of the hash. Defaults to 6 if not specified.
   * @returns {string} - A random hash.
   */
  generateHash(length: number = 6): string {
    if (length < 1) return '';

    let hash = '';

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * BASE62_CHARACTERS.length);
      hash += BASE62_CHARACTERS[random];
    }

    return hash;
  }

  /**
   * Checks if a given hash is already in use.
   *
   * @param {string} hash - The hash to check.
   * @returns {Promise<boolean>} - True if the hash is in use, otherwise false.
   */
  async hashInUse(hash: string): Promise<boolean> {
    if (!hash || hash.length === 0) return false;

    const hashExists = await this._urlRepository.findOne({ where: { hash } });

    if (hashExists) return true;

    return false;
  }
}
