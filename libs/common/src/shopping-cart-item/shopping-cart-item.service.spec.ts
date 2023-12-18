import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartItemService } from './shopping-cart-item.service';
import { PrismaService } from '@common/prisma/prisma.service';
import { PrismaModule } from '@common/prisma/prisma.module';

describe('ShoppingCartItemService', () => {
  let service: ShoppingCartItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ShoppingCartItemService, PrismaService],
    }).compile();

    service = module.get<ShoppingCartItemService>(ShoppingCartItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
