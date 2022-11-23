import { appFastify } from './config/app';
import { swaggerSetup } from './config/swagger';
import { setupPipes } from './config/validation-pipes';

async function bootstrap() {
  const app = await appFastify();
  swaggerSetup(app);
  setupPipes(app);
  await app.listen(3000, '0.0.0.0');
}

bootstrap();
