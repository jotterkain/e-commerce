import {
  IsArray,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
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
  @IsDecimal()
  @IsPositive()
  price: string
  @IsNotEmpty()
  @IsArray()
  categories: number[]
  @IsOptional()
  hero?: any
  @IsOptional()
  images: any
  @IsNotEmpty()
  @IsArray()
  options: ProductOptionDto[]
}
