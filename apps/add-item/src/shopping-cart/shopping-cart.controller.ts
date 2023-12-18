import { Controller } from '@nestjs/common';
import {
  ShoppingCartItem,
  ShoppingCartAddItemServiceController,
  ShoppingCartAddItemServiceControllerMethods,
} from '@common/types';
import { Observable } from 'rxjs';
import { AddItemDto } from '@add-item/shopping-cart/dto/add-item.dto';
import { ShoppingCartService } from '@add-item/shopping-cart/shopping-cart.service';

@Controller()
@ShoppingCartAddItemServiceControllerMethods()
export class ShoppingCartController
  implements ShoppingCartAddItemServiceController
{
  constructor(private readonly shoppingCartService: ShoppingCartService) {}
  addItem(
    addItemDto: AddItemDto,
  ):
    | ShoppingCartItem
    | Observable<ShoppingCartItem>
    | Promise<ShoppingCartItem> {
    return this.shoppingCartService.addItem(addItemDto);
  }
}
