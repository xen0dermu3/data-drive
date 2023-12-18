import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  SHOPPING_CART_ADD_ITEM_SERVICE_NAME,
  SHOPPING_CART_GET_ITEM_SERVICE_NAME,
  ShoppingCartAddItemServiceClient,
  ShoppingCartGetItemServiceClient,
} from '@common/types';
import { AddItemDto } from '@add-item/shopping-cart/dto/add-item.dto';
import { ADD_ITEM_SERVICE, GET_ITEM_SERVICE } from '@common/constants';

@Injectable()
export class ShoppingCartService implements OnModuleInit {
  private addItemService: ShoppingCartAddItemServiceClient;
  private getItemsService: ShoppingCartGetItemServiceClient;

  constructor(
    @Inject(ADD_ITEM_SERVICE) private grpcClientAddItem: ClientGrpc,
    @Inject(GET_ITEM_SERVICE) private grpcClientGetItem: ClientGrpc,
  ) {}

  onModuleInit() {
    this.addItemService = this.grpcClientAddItem.getService(
      SHOPPING_CART_ADD_ITEM_SERVICE_NAME,
    );

    this.getItemsService = this.grpcClientGetItem.getService(
      SHOPPING_CART_GET_ITEM_SERVICE_NAME,
    );
  }

  addItem(addItemDto: AddItemDto) {
    return this.addItemService.addItem(addItemDto);
  }

  getItems() {
    return this.getItemsService.getItems({});
  }
}
