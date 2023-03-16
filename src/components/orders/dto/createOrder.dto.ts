import { IsInt, IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsUUID()
  customerId: string;
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
  @IsUUID()
  addressId: string;
  @IsUUID()
  cardId: string;
}

class OrderItemDto {
  @IsUUID()
  productId: string;
  @IsInt()
  quantity: number;
}