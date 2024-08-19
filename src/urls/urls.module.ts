import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { urlProviders } from './entities/url.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UrlsController],
  providers: [...urlProviders, UrlsService],
})
export class UrlsModule {}
