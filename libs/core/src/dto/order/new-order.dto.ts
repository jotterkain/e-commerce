import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
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
  card_id: string
  @IsNotEmpty()
  @IsString()
  address_id: string
}
