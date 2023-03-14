import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsString()
  categoryId: string
  @IsNotEmpty()
  @IsInt()
  stock: string
  @IsNotEmpty()
  @IsDecimal()
  price: number
  @IsNotEmpty()
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

class ImageDto {
  @IsOptional()
  @IsUrl()
  url: string
}