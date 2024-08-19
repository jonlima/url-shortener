import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  shorten(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto);
  }

  @Get(':hash')
  async redirect(@Param('hash') hash: string) {
    return await this.urlsService.getOriginalUrlByHash(hash);
  }
}
