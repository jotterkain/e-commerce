import {
  ArrayNotEmpty,
  IsArray,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ImageDto } from './image.dto';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  categoryId: string
  @IsNotEmpty()
  @IsInt()
  stock: number
  @IsNotEmpty()
  @IsDecimal()
  price: number
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[]
  @IsNotEmpty()
  @IsString()
  supplierId: string
  @IsNotEmpty()
  @IsString()
  manufacturerId: string
}