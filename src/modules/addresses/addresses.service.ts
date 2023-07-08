import { NewAddressDto, UpdateAddressDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AddressesService {
  constructor(private prismaService: PrismaService) { }

  async getOne(id: string) {
    return await this.prismaService.address.findUnique({ where: { id } })
  }

  async getMany(filter: any) {
    return await this.prismaService.address.findMany({ where: filter })
  }

  async create(dto: NewAddressDto) {
    return await this.prismaService.address
  }

  async update(id: string, dto: UpdateAddressDto) {
    return await this.prismaService.address.update({ where: { id }, data: dto })
  }

  async deleteOne(id: string) {
    return await this.prismaService.address.delete({ where: { id } })
  }
}
