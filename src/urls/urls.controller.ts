import { Controller, Get, Post, Body, Param, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { URLNotFoundException } from 'src/common/errors/custom-errors';

@ApiTags('URLs')
@Controller('')
export class UrlsController {
  private logger = new Logger(UrlsController.name);

  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a shortened URL' })
  @ApiBody({ type: CreateUrlDto })
  @ApiResponse({
    status: 201,
    description: 'The URL has been successfully shortened.',
    type: String,
  })
  @ApiResponse({ status: 400, description: 'Invalid URL provided.' })
  @Post()
  shorten(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto);
  }

  @Get(':hash')
  @ApiOperation({ summary: 'Redirect to the original URL' })
  @ApiResponse({ status: 200, description: 'Redirect to the original URL.' })
  @ApiResponse({ status: 404, description: 'URL not found.' })
  @Get(':hash')
  async redirect(@Param('hash') hash: string) {
    try {
      return await this.urlsService.getOriginalUrlByHash(hash);
    } catch (error) {
      this.logger.error(error);

      if (error instanceof URLNotFoundException) {
        throw new URLNotFoundException();
      }

      throw error;
    }
  }
}
