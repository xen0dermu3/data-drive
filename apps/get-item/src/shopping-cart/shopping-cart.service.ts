import { ShoppingCartItemService } from '@common/shopping-cart-item/shopping-cart-item.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingCartService {
  constructor(private shoppingCartItemService: ShoppingCartItemService) {}

  getItems() {
    return this.shoppingCartItemService.getItems();
  }
}
