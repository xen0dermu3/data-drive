import { ShoppingCartController } from '@add-item/shopping-cart/shopping-cart.controller';
import { ShoppingCartService } from '@add-item/shopping-cart/shopping-cart.service';
import { ShoppingCartItemModule } from '@common/shopping-cart-item/shopping-cart-item.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ShoppingCartItemModule],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
