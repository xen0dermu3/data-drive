import { NestFactory } from '@nestjs/core';
import { AddItemModule } from './add-item.module';

async function bootstrap() {
  const app = await NestFactory.create(AddItemModule);
  await app.listen(3000);
}
bootstrap();
