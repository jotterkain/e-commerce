import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSpecialOfferDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsOptional()
  @IsString()
  description: string
  @IsNumber()
  discountAmount: number
  @IsNumber()
  discountPercent: number
  @IsDateString()
  startDate: string
  @IsDateString()
  endDate: string
  @IsBoolean()
  isActive: boolean
}