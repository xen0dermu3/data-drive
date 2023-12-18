import { Controller, Get } from '@nestjs/common';
import { GetItemService } from './get-item.service';

@Controller()
export class GetItemController {
  constructor(private readonly getItemService: GetItemService) {}

  @Get()
  getHello(): string {
    return this.getItemService.getHello();
  }
}
