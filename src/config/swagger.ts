import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerSetup = (app) => {
  const config = new DocumentBuilder()
    .setTitle('nest with fastify')
    .setDescription('SIMPLE API TO STUDY NEST WITH FASTIFY')
    .addBearerAuth()
    .setVersion('1.0')
    .addTag('users', 'authentication')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  return SwaggerModule.setup('api', app, document);
};
