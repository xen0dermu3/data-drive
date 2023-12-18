import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddItemDto } from '@add-item/shopping-cart/dto/add-item.dto';
import { ShoppingCartService } from '@api-gateway/shopping-cart/shopping-cart.service';

@Controller('cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Post()
  addItem(@Body() addItemDto: AddItemDto) {
    return this.shoppingCartService.addItem(addItemDto);
  }

  @Get()
  getItems() {
    return this.shoppingCartService.getItems();
  }
}
