import { Test, TestingModule } from '@nestjs/testing';
import { UrlsController } from './urls.controller';
import { UrlsService } from './urls.service';
import { Response } from 'express';

describe('UrlsController', () => {
  let controller: UrlsController;
  let service: UrlsService;
  let response: Response;

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

    response = {
      redirect: jest.fn(),
    } as unknown as Response;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('redirect', () => {
    it('should call with the correct parameters', async () => {
      const hash = 'abc123';
      const url = 'https://google.com';

      jest.spyOn(service, 'getOriginalUrlByHash').mockResolvedValue({ url });

      await controller.redirect(hash, response);

      expect(service.getOriginalUrlByHash).toHaveBeenCalledWith(hash);
      expect(response.redirect).toHaveBeenCalledWith(url);
    });
  });
});
