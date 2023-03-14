import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateManufacturerDto {
  @IsOptional()
  @IsString()
  name: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string;
}