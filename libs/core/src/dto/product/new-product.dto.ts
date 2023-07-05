import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator'
import { ProductOptionDto } from './product-option.dto'

export class NewProductDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsOptional()
  @IsString()
  description?: string
  @IsNotEmpty()
  @IsString()
  price: string
  @IsNotEmpty()
  @IsArray()
  categories: number[]
  @IsOptional()
  @IsString()
  hero?: string
  @IsNotEmpty()
  @IsArray()
  images: string[]
  @IsNotEmpty()
  @IsArray()
  options: ProductOptionDto[]
}
