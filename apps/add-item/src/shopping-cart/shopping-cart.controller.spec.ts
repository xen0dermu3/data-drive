import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItemModule } from '@common/shopping-cart-item/shopping-cart-item.module';
import { PrismaModule } from '@common/prisma/prisma.module';
import { ShoppingCartItemService } from '@common/shopping-cart-item/shopping-cart-item.service';
import { PrismaService } from '@common/prisma/prisma.service';

describe('ShoppingCartController', () => {
  let controller: ShoppingCartController;
  const id = '8343da3d-b268-4537-a28e-b61b9b4110db';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      imports: [ShoppingCartItemModule, PrismaModule],
      providers: [
        ShoppingCartService,
        ShoppingCartItemService,
        {
          provide: PrismaService,
          useValue: {
            shoppingCartItems: {
              create(addItemDto: { data: { name: string; price: number } }) {
                return Promise.resolve({
                  id,
                  ...addItemDto.data,
                });
              },
            },
          },
        },
      ],
    }).compile();

    controller = module.get<ShoppingCartController>(ShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should add item in shopping cart', async () => {
    const data = { name: 'Test name', price: 40.0 };
    expect(await controller.addItem(data)).toStrictEqual({
      id,
      ...data,
    });
  });
});
