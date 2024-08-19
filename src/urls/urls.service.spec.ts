import { Test, TestingModule } from '@nestjs/testing';
import { UrlsService } from './urls.service';
import { Repository } from 'typeorm';
import { Url } from './entities/url.entity';
import { URLS_REPOSITORY } from '../common/constants';

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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
