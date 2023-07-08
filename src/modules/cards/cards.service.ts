import { NewCardDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CardsService {
  constructor(private prismaService: PrismaService) {}

  async getOne(id: string) {
    return await this.prismaService.card.findUnique({where: {id}})
  }
  async getMany(filter: any) {
    return await this.prismaService.card.findMany({where: filter})
  }
  async deleteOne(id: string) {
    return await this.prismaService.card.delete({where: {id}})
  }
  async create(dto: NewCardDto) {
    return await this.prismaService.card
  }
}
