import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Logger,
  Res,
  UseGuards,
  Req,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { URLNotFoundException } from 'src/common/errors/custom-errors';
import { Response, Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OptionalAuthGuard } from 'src/auth/guards/optional-auth.guard';
import { IPayloadUser } from 'src/users/interfaces/user.interface';
import { UpdateUrlDto } from './dto/update-url.dto';

@ApiTags('URLs')
@Controller('')
export class UrlsController {
  private logger = new Logger(UrlsController.name);

  constructor(private readonly _urlsService: UrlsService) {}

  @UseGuards(OptionalAuthGuard)
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
  shorten(
    @Body() createUrlDto: CreateUrlDto,
    @Req() req: Request & { user?: IPayloadUser },
  ) {
    if (req.user) {
      const userId = req.user?.id;
      return this._urlsService.createByUser(userId, createUrlDto);
    } else {
      return this._urlsService.create(createUrlDto);
    }
  }

  @ApiOperation({ summary: 'Redirect to the original URL' })
  @ApiResponse({ status: 200, description: 'Redirect to the original URL.' })
  @ApiResponse({ status: 404, description: 'URL not found.' })
  @Get(':hash')
  async redirect(@Param('hash') hash: string, @Res() res: Response) {
    try {
      const result = await this._urlsService.getOriginalUrlByHash(hash);
      return res.redirect(result.url);
    } catch (error) {
      this.logger.error(error);

      if (error instanceof URLNotFoundException) {
        throw new URLNotFoundException();
      }

      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('url/user/:id')
  async findByUserId(@Param('id') userId: number) {
    return await this._urlsService.findByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('url/:id')
  remove(@Param('id') id: number, @Req() req) {
    return this._urlsService.removeByUserId(req.user.id, id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('url/:id')
  @ApiOperation({ summary: 'Update url by id' })
  update(
    @Param('id') id: number,
    @Body() updateUrlDto: UpdateUrlDto,
    @Req() req,
  ) {
    return this._urlsService.updateByUserId(req.user.id, id, updateUrlDto);
  }
}
