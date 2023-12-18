import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartService } from './shopping-cart.service';
import { ADD_ITEM_SERVICE, GET_ITEM_SERVICE } from '@common/constants';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;
  // let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ShoppingCartService,
        { provide: ADD_ITEM_SERVICE, useValue: {} },
        { provide: GET_ITEM_SERVICE, useValue: {} },
      ],
    }).compile();

    service = module.get<ShoppingCartService>(ShoppingCartService);

    // app.connectMicroservice({
    //   name: ADD_ITEM_SERVICE,
    //   transport: Transport.GRPC,
    //   options: {
    //     package: SHOPPING_CART,
    //     protoPath: join(__dirname, PROTO_PATH),
    //   },
    // });

    // app.connectMicroservice({
    //   name: GET_ITEM_SERVICE,
    //   transport: Transport.GRPC,
    //   options: {
    //     package: SHOPPING_CART,
    //     protoPath: join(__dirname, PROTO_PATH),
    //   },
    // });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
