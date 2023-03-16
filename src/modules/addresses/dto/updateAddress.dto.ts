import { IsOptional, IsPostalCode, IsString } from 'class-validator';

export class UpdateAddressDto {
  @IsOptional()
  @IsString()
  countryCode: string;
  @IsOptional()
  @IsString()
  state: string;
  @IsOptional()
  @IsString()
  city: string;
  @IsOptional()
  @IsString()
  street: string;
  @IsOptional()
  @IsPostalCode()
  postalCode: string;
  @IsOptional()
  @IsString()
  neighborhood: string;
  @IsOptional()
  @IsString()
  buildingName: string; // building known as
}