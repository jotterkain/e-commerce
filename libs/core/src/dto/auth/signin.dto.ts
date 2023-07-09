import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class SignInDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    username?:string 
    @IsOptional()
    @IsPhoneNumber()
    phone?: string
    @IsOptional()
    @IsEmail()
    email?: string
    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 7,
        minSymbols: 1,
        minNumbers: 1,
    })
    password: string
}