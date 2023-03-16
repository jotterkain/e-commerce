import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string;
  @IsDateString()
  dateOfBirth: string;
}