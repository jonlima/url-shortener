import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  schema: process.env.DATABASE_SCHEMA,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  synchronize: false,
  logging: true,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + './migrations/*.{js,ts}'],
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    typeOrmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
