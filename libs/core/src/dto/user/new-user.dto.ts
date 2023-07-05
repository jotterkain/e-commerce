import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class NewUserDto {
  @IsOptional()
  @IsString()
  first_name?: string;
  @IsOptional()
  @IsString()
  last_name?: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsOptional()
  @IsString()
  email?: string;
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 7,
    minSymbols: 1,
    minNumbers: 1,
  })
  password: string;
}
