import { IsInt, IsUUID } from 'class-validator';

export class CreateCartItemDto {
  @IsUUID()
  productId: string
  @IsInt()
  quantity: number
}