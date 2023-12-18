import { Controller } from '@nestjs/common';
import {
  ShoppingCartGetItemServiceController,
  ShoppingCartGetItemServiceControllerMethods,
  ShoppingCartItems,
} from '@common/types';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '@get-item/shopping-cart/shopping-cart.service';

@Controller()
@ShoppingCartGetItemServiceControllerMethods()
export class ShoppingCartController
  implements ShoppingCartGetItemServiceController
{
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  getItems():
    | ShoppingCartItems
    | Promise<ShoppingCartItems>
    | Observable<ShoppingCartItems> {
    return this.shoppingCartService.getItems();
  }
}
