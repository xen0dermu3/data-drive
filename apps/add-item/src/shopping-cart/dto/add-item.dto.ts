import { AddItemDto as IAddItemDto } from '@common/types';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AddItemDto implements IAddItemDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
