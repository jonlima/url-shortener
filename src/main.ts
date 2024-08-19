import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';

const PORT_DEFAULT = 8000;
const DOMAIN_DEFAULT = 'http://localhost';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('APP_PORT') || PORT_DEFAULT;
  const domain = config.get<number>('API_DOMAIN') || DOMAIN_DEFAULT;
  const logger = new Logger('Main');
  const configSwagger = new DocumentBuilder();

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port, () => {
    const msg = `Server is running at ${domain}:${port}`;
    logger.log(msg);
  });
}

bootstrap();
