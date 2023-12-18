import { Injectable } from '@nestjs/common';

@Injectable()
export class AddItemService {
  getHello(): string {
    return 'Hello World!';
  }
}
