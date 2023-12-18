import { AddItemDto } from '@add-item/shopping-cart/dto/add-item.dto';
import { PrismaService } from '@common/prisma/prisma.service';
import { ShoppingCartItem, ShoppingCartItems } from '@common/types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingCartItemService {
  constructor(private prismaService: PrismaService) {}

  addItem(addItemDto: AddItemDto): Promise<ShoppingCartItem> {
    return this.prismaService.shoppingCartItems.create({ data: addItemDto });
  }

  async getItems(): Promise<ShoppingCartItems> {
    return {
      shoppingCartItems: await this.prismaService.shoppingCartItems.findMany(),
    };
  }
}
