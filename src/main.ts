import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-minimal';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') ?? ['http://localhost:3000'];

  app.enableCors({ origin: allowedOrigins, credentials: true, allowedHeaders: '*', methods: '*' });

  // Middleware pour l'upload de fichiers - max 10MB
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  await app.listen(process.env.PORT || 4666);
}
bootstrap();
