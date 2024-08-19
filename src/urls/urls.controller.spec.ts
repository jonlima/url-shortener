import { Test, TestingModule } from '@nestjs/testing';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';

describe('UrlsController', () => {
  let controller: UrlsController;
  let service: UrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlsController],
      providers: [
        {
          provide: UrlsService,
          useValue: {
            create: jest.fn(),
            getOriginalUrlByHash: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UrlsController>(UrlsController);
    service = module.get<UrlsService>(UrlsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('shorten', () => {
    it('should call with the correct parameters', async () => {
      const dto = new CreateUrlDto();
      dto.originalUrl = 'http://google.com';
      await controller.shorten(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('redirect', () => {
    it('should call with the correct parameters', async () => {
      const hash = 'abc123';
      await controller.redirect(hash);
      expect(service.getOriginalUrlByHash).toHaveBeenCalledWith(hash);
    });
  });
});
