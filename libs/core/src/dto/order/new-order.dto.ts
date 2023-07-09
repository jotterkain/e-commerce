import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator'
import { OrderItemDto } from './order-option.dto'

export class NewOrderDto {
  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  order_items: OrderItemDto[]
  @IsNotEmpty()
  @IsString()
  payment_id: string
  @IsNotEmpty()
  @IsString()
  address_id: string
}
