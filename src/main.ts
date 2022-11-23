import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { swaggerSetup } from './config/swagger';
import { setupPipes } from './config/validation-pipes';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  swaggerSetup(app);
  setupPipes(app);

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
