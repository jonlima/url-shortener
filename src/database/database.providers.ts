import { DATA_SOURCE } from '../common/constants';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Url } from 'src/urls/entities/url.entity';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        database: configService.get<string>('DATABASE_NAME'),
        schema: configService.get<string>('DATABASE_SCHEMA'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        synchronize: false,
        logging: true,
        entities: [Url],
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
