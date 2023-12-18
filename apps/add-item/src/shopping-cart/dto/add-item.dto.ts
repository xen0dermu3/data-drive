import { AddItemDto as IAddItemDto } from '@common/types';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  price: number;
}
