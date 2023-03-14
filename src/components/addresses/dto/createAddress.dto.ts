import { IsNotEmpty, IsOptional, IsPostalCode, IsString, IsUUID, Length } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 2)
  countryCode: string;
  @IsNotEmpty()
  @IsString()
  state: string;
  @IsNotEmpty()
  @IsString()
  city: string;
  @IsNotEmpty()
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
  @IsOptional()
  @IsUUID()
  customerId: string;
}