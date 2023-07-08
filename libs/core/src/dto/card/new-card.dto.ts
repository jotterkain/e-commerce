import {
  IsCreditCard,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator'

export class NewCardDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsNotEmpty()
  @IsCreditCard()
  num: string
  @IsNotEmpty()
  @IsNumber()
  cvv: number
}
