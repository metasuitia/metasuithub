import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const logger =new Logger('Bot de metasuit');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('bot');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(envs.port);
  logger.log(`Bot escuchando en el puerto ${envs.port}`);
}
bootstrap();
