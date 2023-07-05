import { IsOptional, IsString, IsUUID } from 'class-validator'

export class QueryAddressDto {
  @IsOptional()
  @IsString()
  country: string
  @IsOptional()
  @IsString()
  city: string
  @IsOptional()
  @IsString()
  zip: string
  @IsOptional()
  @IsString()
  street: string
  @IsOptional()
  @IsString()
  home_code: string
  @IsOptional()
  @IsUUID()
  user_id: string
}
