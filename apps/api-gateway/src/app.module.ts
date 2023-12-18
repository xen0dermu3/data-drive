import { ShoppingCartModule } from '@api-gateway/shopping-cart/shopping-cart.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ShoppingCartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
