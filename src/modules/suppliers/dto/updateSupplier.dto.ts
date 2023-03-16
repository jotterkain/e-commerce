import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from 'class-validator';

export class UpdateSupplierDto {
  @IsOptional()
  @IsString()
  name: string
  @IsOptional()
  @IsEmail()
  email: string
  @IsOptional()
  @IsPhoneNumber()
  phoneNumber: string
  @IsOptional()
  @IsUUID()
  addressId: string
}