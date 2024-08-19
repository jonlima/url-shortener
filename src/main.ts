import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT_DEFAULT = 8000;
const DOMAIN_DEFAULT = 'http://localhost';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('APP_PORT') || PORT_DEFAULT;
  const domain = config.get<number>('API_DOMAIN') || DOMAIN_DEFAULT;
  const logger = new Logger('Main');
  const configSwagger = new DocumentBuilder()
    .setTitle('Rest API URL Shortened')
    .setDescription('This API provides services for URL shortening')
    .setVersion('0.1.0')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, configSwagger);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  SwaggerModule.setup('doc', app, swaggerDocument, {
    jsonDocumentUrl: 'doc/json',
  });

  await app.listen(port, () => {
    const msg = `Server is running at ${domain}:${port}`;
    logger.log(msg);
  });
}

bootstrap();
