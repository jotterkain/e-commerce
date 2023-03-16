import { IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string;
  @IsOptional()
  @IsDateString()
  dateOfBirth: string;
}