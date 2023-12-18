import { Test, TestingModule } from '@nestjs/testing';
import { AddItemController } from './add-item.controller';
import { AddItemService } from './add-item.service';

describe('AddItemController', () => {
  let addItemController: AddItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AddItemController],
      providers: [AddItemService],
    }).compile();

    addItemController = app.get<AddItemController>(AddItemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(addItemController.getHello()).toBe('Hello World!');
    });
  });
});
