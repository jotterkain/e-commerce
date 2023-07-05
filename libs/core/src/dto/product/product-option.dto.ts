import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class ProductOptionDto {
  @IsNotEmpty()
  @IsString()
  option: string
  @IsNotEmpty()
  @IsString()
  label: string
  @IsOptional()
  @IsString()
  description?: string
  @IsNotEmpty()
  @IsString()
  price: string
}
