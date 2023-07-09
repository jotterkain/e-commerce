import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsStrongPassword } from "class-validator";

export class SignInDto {
    @IsOptional()
    @IsPhoneNumber()
    phone: string
    @IsOptional()
    @IsEmail()
    email: string
    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 7,
        minSymbols: 1,
        minNumbers: 1,
    })
    password: string
}