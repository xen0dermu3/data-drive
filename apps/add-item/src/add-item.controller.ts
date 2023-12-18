import { Controller, Get } from '@nestjs/common';
import { AddItemService } from './add-item.service';

@Controller()
export class AddItemController {
  constructor(private readonly addItemService: AddItemService) {}

  @Get()
  getHello(): string {
    return this.addItemService.getHello();
  }
}
