import { IsNotEmpty, IsOptional, IsPostalCode, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsString()
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
}

/*
  NOTE : Both neighborhood and PostalCode can't be empty. todo: implements that logic
*/