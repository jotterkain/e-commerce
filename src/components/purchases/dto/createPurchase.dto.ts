import { IsUUID } from 'class-validator';

export class CreatePurchaseDto {
  @IsUUID()
  customerId: string
}