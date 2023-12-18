import { Injectable } from '@nestjs/common';
import { AddItemDto } from '@add-item/shopping-cart/dto/add-item.dto';
import { ShoppingCartItemService } from '@common/shopping-cart-item/shopping-cart-item.service';

@Injectable()
export class ShoppingCartService {
  constructor(private shoppingCartItemService: ShoppingCartItemService) {}

  addItem(addItemDto: AddItemDto) {
    return this.shoppingCartItemService.addItem(addItemDto);
  }
}
