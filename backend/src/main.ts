import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({
    origin: '*',
  });

  const config = new DocumentBuilder()
    .setTitle('Documentação No-Control')
    .addServer(`${process.env.HOST}:${process.env.PORT}`)
    .addServer(process.env.NGROK_URL)
    .setVersion('1.0')
    // .addBearerAuth()
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
