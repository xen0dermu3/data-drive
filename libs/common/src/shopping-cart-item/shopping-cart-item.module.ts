import { PrismaModule } from '@common/prisma/prisma.module';
import { ShoppingCartItemService } from '@common/shopping-cart-item/shopping-cart-item.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [ShoppingCartItemService],
  exports: [ShoppingCartItemService],
})
export class ShoppingCartItemModule {}
