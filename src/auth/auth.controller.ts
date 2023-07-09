import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUserDto, SignInDto } from '@eshop/core';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    signup(@Body() dto: NewUserDto) {
        return this.authService.signUp(dto)
    }

    @Post("signin")
    signin(@Body() dto:SignInDto) {
        return this.authService.signIn(dto)
    }
}
