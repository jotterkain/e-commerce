import { ArrayNotEmpty, IsArray, IsDecimal, IsInt, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ImageDto } from './image.dto';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsInt()
  categoryId: number;
  @IsOptional()
  @IsInt()
  stock: number;
  @IsOptional()
  @IsDecimal()
  price: number;
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  images: ImageDto[];
  @IsOptional()
  @IsString()
  supplierId: string;
  @IsOptional()
  @IsString()
  manufacturerId: string;
}