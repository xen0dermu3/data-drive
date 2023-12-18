import { Injectable } from '@nestjs/common';

@Injectable()
export class GetItemService {
  getHello(): string {
    return 'Hello World!';
  }
}
