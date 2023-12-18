import { ShoppingCartItemModule } from '@common/shopping-cart-item/shopping-cart-item.module';
import { ShoppingCartController } from '@get-item/shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from '@get-item/shopping-cart/shopping-cart.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ShoppingCartItemModule],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
