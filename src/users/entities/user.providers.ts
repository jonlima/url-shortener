import { DataSource } from 'typeorm';
import { User } from './user.entity';
import {
  DATA_SOURCE,
  USERS_REPOSITORY,
} from '../../common/constants/constants';

export const userProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
