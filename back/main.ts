import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT_BACK || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos que não existem no DTO
    forbidNonWhitelisted: true, // Dispara erro se o corpo da requisição mandar algo a mais
    transform: true, // Faz o @Body virar instância real da classe
  }));
  
  await app.listen(port);

  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
}

bootstrap();
