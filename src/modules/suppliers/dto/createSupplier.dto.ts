import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from 'class-validator';
import { CreateAddressDto } from '../../addresses/dto';

export class CreateSupplierDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsEmail()
  email: string
  @IsPhoneNumber()
  phoneNumber: string
  @IsNotEmpty()
  address: CreateAddressDto
}