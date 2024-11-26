import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger =new Logger('Hub de metasuit');

  //restfull api
  const app = await NestFactory.create(AppModule,{
    rawBody: true,cors:true
  }); 
  
  app.setGlobalPrefix('hub');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  //microservicio conectado a nast
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: envs.natsServers,
    },
  }, {
    inheritAppConfig: true
  })

  await app.startAllMicroservices();

  await app.listen(envs.port);

  logger.log(`Bot escuchando en el puerto ${envs.port}`);
}
bootstrap();
