import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { ADD_ITEM_SERVICE, GET_ITEM_SERVICE } from '@common/constants';

describe('ShoppingCartController', () => {
  let controller: ShoppingCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartController],
      providers: [
        ShoppingCartService,
        { provide: ADD_ITEM_SERVICE, useValue: {} },
        { provide: GET_ITEM_SERVICE, useValue: {} },
      ],
    }).compile();

    controller = module.get<ShoppingCartController>(ShoppingCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
