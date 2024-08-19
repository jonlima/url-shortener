import { Test, TestingModule } from '@nestjs/testing';
import { UrlsService } from './urls.service';
import { EntityNotFoundError, Repository } from 'typeorm';
import { Url } from './entities/url.entity';
import { URLS_REPOSITORY } from '../common/constants/constants';

describe('UrlsService', () => {
  let service: UrlsService;
  let repository: Repository<Url>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlsService,
        {
          provide: URLS_REPOSITORY,
          useValue: {
            findOne: jest.fn(),
            findOneOrFail: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UrlsService>(UrlsService);
    repository = module.get<Repository<Url>>(URLS_REPOSITORY);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOriginalUrlByHash', () => {
    it('should return null if hash is empty', async () => {
      await expect(service.getOriginalUrlByHash('')).resolves.toBeNull();
    });

    it('should return the original URL when found', async () => {
      const urlEntity: Url = {
        id: 1,
        originalUrl: 'http://google.com',
        hash: 'ab2024',
        userId: 1,
        clickCount: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      };

      const urlExpected = { url: 'http://google.com' };

      jest.spyOn(repository, 'findOneOrFail').mockResolvedValue(urlEntity);

      const result = await service.getOriginalUrlByHash('ab2024');

      expect(result).toEqual(urlExpected);
      expect(repository.findOneOrFail).toHaveBeenCalledWith({
        where: { hash: 'ab2024' },
      });
    });

    it('should rethrow any other errors', async () => {
      const error = new Error('Unexpected error');
      jest.spyOn(repository, 'findOneOrFail').mockRejectedValue(error);

      await expect(service.getOriginalUrlByHash('abcdef')).rejects.toThrow(
        error,
      );
    });
  });
});
