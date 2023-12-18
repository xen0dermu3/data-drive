import { AddItemModule } from '@add-item/add-item.module';
import { SHOPPING_CART, PROTO_PATH } from '@common/constants';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AddItemModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, PROTO_PATH),
        package: SHOPPING_CART,
      },
    },
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}

bootstrap();
