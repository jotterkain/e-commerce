import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  categoryId: string;
  @IsOptional()
  @IsInt()
  stock: string;
  @IsOptional()
  @IsDecimal()
  price: number;
  @IsOptional()
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

class ImageDto {
  @IsOptional()
  @IsUrl()
  url: string;
}

/*
  NOTE: todo// there should be a route products/:id/images - METHOD: POST || DELETE
*/