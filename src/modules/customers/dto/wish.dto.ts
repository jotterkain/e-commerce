import { IsUUID } from 'class-validator';

export class WishDto {
  @IsUUID()
  id: string
  @IsUUID()
  productId:string
}