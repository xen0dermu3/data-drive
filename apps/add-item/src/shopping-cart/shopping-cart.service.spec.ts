import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItemService } from '@common/shopping-cart-item/shopping-cart-item.service';
import { ShoppingCartItemModule } from '@common/shopping-cart-item/shopping-cart-item.module';
import { PrismaModule } from '@common/prisma/prisma.module';
import { PrismaService } from '@common/prisma/prisma.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ShoppingCartItemModule, PrismaModule],
      providers: [ShoppingCartService, ShoppingCartItemService, PrismaService],
    }).compile();

    service = module.get<ShoppingCartService>(ShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
