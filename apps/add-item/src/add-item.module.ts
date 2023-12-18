import { Module } from '@nestjs/common';
import { AddItemController } from './add-item.controller';
import { AddItemService } from './add-item.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [ShoppingCartModule],
  controllers: [AddItemController],
  providers: [AddItemService],
})
export class AddItemModule {}
