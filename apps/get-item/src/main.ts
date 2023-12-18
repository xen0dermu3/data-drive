import { NestFactory } from '@nestjs/core';
import { GetItemModule } from './get-item.module';

async function bootstrap() {
  const app = await NestFactory.create(GetItemModule);
  await app.listen(3000);
}
bootstrap();
