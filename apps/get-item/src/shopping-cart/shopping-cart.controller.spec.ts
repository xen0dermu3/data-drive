import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartItemModule } from '@common/shopping-cart-item/shopping-cart-item.module';
import { PrismaModule } from '@common/prisma/prisma.module';
import { ShoppingCartItemService } from '@common/shopping-cart-item/shopping-cart-item.service';
import { PrismaService } from '@common/prisma/prisma.service';

describe('ShoppingCartController', () => {
  let controller: ShoppingCartController;
  const items = [
    {
      id: '8343da3d-b268-4537-a28e-b61b9b4110db',
      name: 'Test name',
      price: 40.0,
    },
    {
      id: '6588d0f6-895c-4b79-a24b-60f54ad3db27',
      name: 'Test name2',
      price: 41,
    },
  ];

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
              findMany() {
                return Promise.resolve(items);
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

  it('Should get items from shopping cart', async () => {
    expect(await controller.getItems()).toStrictEqual({
      shoppingCartItems: items,
    });
  });
});
