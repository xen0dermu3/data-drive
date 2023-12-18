import { Test, TestingModule } from '@nestjs/testing';
import { GetItemController } from './get-item.controller';
import { GetItemService } from './get-item.service';

describe('GetItemController', () => {
  let getItemController: GetItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetItemController],
      providers: [GetItemService],
    }).compile();

    getItemController = app.get<GetItemController>(GetItemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(getItemController.getHello()).toBe('Hello World!');
    });
  });
});
