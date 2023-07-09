import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export class QueryUserDto {
  @IsOptional()
  @IsString()
  first_name?: string
  @IsOptional()
  @IsString()
  last_name?: string
  @IsOptional()
  @IsPhoneNumber()
  phone?: string
  @IsOptional()
  @IsEmail()
  email?:string
}
