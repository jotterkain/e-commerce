import { IsUUID } from 'class-validator';

export class FavDto {
  @IsUUID()
  id:string
  @IsUUID()
  productId:string
}