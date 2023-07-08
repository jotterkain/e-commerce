import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'
export class NewAddressDto {
  @IsNotEmpty()
  @IsString()
  country: string
  @IsNotEmpty()
  @IsString()
  city: string
  @IsOptional()
  @IsString()
  zip: string
  @IsNotEmpty()
  @IsString()
  street: string
  @IsOptional()
  @IsString()
  home_code: string
}
