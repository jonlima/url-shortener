import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

const PORT_DEFAULT = 8000;
const DOMAIN_DEFAULT = 'http://localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('APP_PORT') || PORT_DEFAULT;
  const domain = config.get<number>('API_DOMAIN') || DOMAIN_DEFAULT;

  await app.listen(port, () => {
    const msg = `Server is running at ${domain}:${port}`
    console.log(msg)
  });
}
bootstrap();
