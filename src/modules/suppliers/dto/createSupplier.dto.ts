import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsEmail()
  email: string
  @IsPhoneNumber()
  phoneNumber: string
  @IsNotEmpty()
  @IsUUID()
  addressId: string
}