import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*' // Reemplace con el origen de su aplicación cliente
  });
  
  await app.listen(3000);

}
bootstrap();
