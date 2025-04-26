import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT_BACK || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  await app.listen(port);

  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
}

bootstrap();
