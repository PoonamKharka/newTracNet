import { NestFactory } from '@nestjs/core';
import cors from 'cors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('OzGreen Api Documnetation')
    .setDescription('This documentation holds all APIs description')
    .setVersion('1.0')
    .addTag('OzGreen')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5555);
}
bootstrap();
