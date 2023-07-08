import { OrderStatus } from '@eshop/core'
import { IsDecimal, IsEnum, IsOptional, IsString } from 'class-validator'

export class QueryOrderDto {
  @IsOptional()
  @IsString()
  user_id: string
  @IsOptional()
  @IsString()
  card_id: string
  @IsOptional()
  @IsString()
  address_id: string
  @IsOptional()
  @IsEnum(OrderStatus)
  status: OrderStatus
  @IsOptional()
  @IsDecimal()
  total: string
}
