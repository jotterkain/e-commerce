import { NewUserDto, SignInDto } from '@eshop/core';
import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { isEmpty } from 'class-validator';
import { UsersService } from 'src/modules/users/users.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private usersSerice: UsersService,
        private jwtService: JwtService,
        private prismaService: PrismaService,
        private notificationService: NotificationsService,
        private configService: ConfigService) { }

    async signUp(dto: NewUserDto) {
        const user = await this.usersSerice.create(dto)
        const payload = { sub: user.id }
        return {
            access_token: "Bearer " + await this.jwtService.signAsync(payload)
        }
    }

    async signIn(dto: SignInDto) {
        if (!dto.email && !dto.password && !dto.username)
            throw new BadRequestException("Either email or password is required to sign in")

        if ([dto.email, dto.phone, dto.username].filter(e => !!e).length >= 2)
            throw new BadRequestException("You have to provide either email, phone number or username")

        let filter = dto.phone ? { phone: dto.phone } : dto.username ? { username: dto.username } : { email: dto.email }
        const user = await this.usersSerice.getFirst(filter)

        if (isEmpty(user))
            throw new ForbiddenException("User with these credentials does not exists")

        if (!(await compare(dto.password, user.hash)))
            throw new UnauthorizedException("Incorrect password")

        const payload = { sub: user.id }
        return {
            access_token: "Bearer " + await this.jwtService.signAsync(payload)
        }
    }

    async logout(id: string) {

    }

    async verifyJwtToken(token: string) {
        try {
            const { sub } = await this.jwtService.verifyAsync(token, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET")
            })
            return await this.usersSerice.getOne(sub as string)
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
