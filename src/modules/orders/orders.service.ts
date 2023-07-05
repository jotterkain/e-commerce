import { NewOrderDto, UpdateOrderDto } from '@eshop/core/dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: NewOrderDto) {}

  async update(id: string, dto: UpdateOrderDto) {}

  async getOne(id: string) {}

  async getMany(filter: any) {}
}
