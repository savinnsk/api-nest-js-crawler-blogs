import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = (app) => {
  const config = new DocumentBuilder()
    .setTitle('nest with fastify')
    .setDescription('SIMPLE API TO STUDY NEST WITH FASTIFY')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  return SwaggerModule.setup('api', app, document);
};
