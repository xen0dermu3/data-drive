import { SHOPPING_CART, PROTO_PATH } from '@common/constants';
import { GetItemModule } from '@get-item/get-item.module';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GetItemModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, PROTO_PATH),
        package: SHOPPING_CART,
      },
    },
  );

  await app.listen();
}

bootstrap();
