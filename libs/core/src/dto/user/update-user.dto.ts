import { IsOptional, IsString, IsStrongPassword } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  first_name?: string;
  @IsOptional()
  @IsString()
  last_name?: string;
  @IsOptional()
  @IsStrongPassword({
    minLength: 7,
    minSymbols: 1,
    minNumbers: 1,
  })
  password?: string;
}
