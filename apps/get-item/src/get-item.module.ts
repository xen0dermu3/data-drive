import { Module } from '@nestjs/common';
import { GetItemController } from './get-item.controller';
import { GetItemService } from './get-item.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [ShoppingCartModule],
  controllers: [GetItemController],
  providers: [GetItemService],
})
export class GetItemModule {}
