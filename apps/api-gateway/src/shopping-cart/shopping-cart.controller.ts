import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AddItemDto } from '@add-item/shopping-cart/dto/add-item.dto';
import { ShoppingCartService } from '@api-gateway/shopping-cart/shopping-cart.service';
import { ApiTags } from '@nestjs/swagger';
import { timeout } from 'rxjs';
import { GrpcInterceptor } from '@add-item/interceptors/grpc-error.interceptor';

@Controller('cart')
@ApiTags('cart')
@UseInterceptors(GrpcInterceptor)
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Post()
  addItem(@Body() addItemDto: AddItemDto) {
    return this.shoppingCartService.addItem(addItemDto).pipe(timeout(1000));
  }

  @Get()
  getItems() {
    return this.shoppingCartService.getItems().pipe(timeout(1000));
  }
}
