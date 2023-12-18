import { ShoppingCartModule } from '@add-item/shopping-cart/shopping-cart.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ShoppingCartModule],
  controllers: [],
  providers: [],
})
export class AddItemModule {}
