import { IsDateString, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { CreateAddressDto } from '../../addresses/dto';

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
  @IsOptional()
  address: CreateAddressDto
}