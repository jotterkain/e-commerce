import { IsNotEmpty, IsString, IsInt } from 'class-validator'

export class OrderItemDto {
  @IsNotEmpty()
  @IsString()
  product_id: string
  @IsNotEmpty()
  @IsInt()
  quantity: number
}
