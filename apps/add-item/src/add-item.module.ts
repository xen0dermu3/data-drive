import { Module } from '@nestjs/common';
import { AddItemController } from './add-item.controller';
import { AddItemService } from './add-item.service';

@Module({
  imports: [],
  controllers: [AddItemController],
  providers: [AddItemService],
})
export class AddItemModule {}
