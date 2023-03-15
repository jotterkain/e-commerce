import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @IsString()
  ownerName: string
  @IsNotEmpty()
  cardNumber:string
  @IsNotEmpty()
  @Matches(/^(0[1-9]|1[0-2])-[0-9]{2}$/)
  expirationDate:string
  @IsNotEmpty()
  @IsString()
  @Length(3,3)
  cvv:string
}