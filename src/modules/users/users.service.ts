import { NewUserDto, UpdateUserDto } from '@eshop/core/dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getOne(id: string) {}
  async getMany(filter: any) {}
  async deleteOne(id: string) {}
  async create(dto: NewUserDto) {}
  async update(id: string, dto: UpdateUserDto) {}
}
