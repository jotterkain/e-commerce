import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSpecialOfferDto {
  @IsOptional()
  @IsString()
  name: string
  @IsOptional()
  @IsString()
  description: string
  @IsOptional()
  @IsNumber()
  discountAmount: number
  @IsOptional()
  @IsNumber()
  discountPercent: number
  @IsOptional()
  @IsDateString()
  startDate: string
  @IsOptional()
  @IsDateString()
  endDate: string
  @IsOptional()
  @IsBoolean()
  isActive: boolean
}