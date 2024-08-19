import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { BookModule } from './book/book.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BookModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    },
  );
  await app.listen();
}
bootstrap();
