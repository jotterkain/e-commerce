import { IsNotEmpty, IsString, IsInt, IsArray } from 'class-validator'
import { ProductOptionDto } from '../product/product-option.dto'

export class OrderItemDto {
  @IsNotEmpty()
  @IsString()
  product_id: string
  @IsNotEmpty()
  @IsInt()
  quantity: number
  @IsArray()
  options: ProductOptionDto[]
}
