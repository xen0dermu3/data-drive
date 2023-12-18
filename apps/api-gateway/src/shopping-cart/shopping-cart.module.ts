import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  ADD_ITEM_SERVICE,
  GET_ITEM_SERVICE,
  PROTO_PATH,
  SHOPPING_CART,
} from '@common/constants';
import { ShoppingCartController } from '@api-gateway/shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from '@api-gateway/shopping-cart/shopping-cart.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ADD_ITEM_SERVICE,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, PROTO_PATH),
          package: SHOPPING_CART,
        },
      },
      {
        name: GET_ITEM_SERVICE,
        transport: Transport.GRPC,
        options: {
          protoPath: join(__dirname, PROTO_PATH),
          package: SHOPPING_CART,
        },
      },
    ]),
  ],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
