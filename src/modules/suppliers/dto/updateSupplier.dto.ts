import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from 'class-validator';
import { UpdateAddressDto } from '../../addresses/dto';

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
  address: UpdateAddressDto
}