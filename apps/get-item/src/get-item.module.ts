import { Module } from '@nestjs/common';
import { GetItemController } from './get-item.controller';
import { GetItemService } from './get-item.service';

@Module({
  imports: [],
  controllers: [GetItemController],
  providers: [GetItemService],
})
export class GetItemModule {}
