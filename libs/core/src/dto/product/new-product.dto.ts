import {
  IsArray,
  IsDecimal,
  IsInt,
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
  @IsInt()
  stock: number
  @IsNotEmpty()
  @IsArray()
  options: ProductOptionDto[]
}
