import { IsCreditCard, IsInt, IsOptional, IsString, Matches } from 'class-validator';

export class UpdateCardDto {
  @IsOptional()
  @IsString()
  ownerName: string
  @IsOptional()
  @IsCreditCard()
  cardNumber:string
  @IsOptional()
  @Matches(/^(0[1-9]|1[0-2])-[0-9]{2}$/)
  expirationDate:string
  @IsOptional()
  @IsString()
  cvv:string
}