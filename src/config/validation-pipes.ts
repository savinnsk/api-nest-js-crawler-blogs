import { ValidationPipe } from '@nestjs/common';

export const setupPipes = (app) => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
};
