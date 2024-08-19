import { DataSource } from 'typeorm';
import { Url } from './url.entity';
import { DATA_SOURCE, URLS_REPOSITORY } from '../../common/constants/constants';

export const urlProviders = [
  {
    provide: URLS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Url),
    inject: [DATA_SOURCE],
  },
];
