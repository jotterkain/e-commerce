import { NewCategoryDto, UpdateCategoryDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  async getOne(id: number) {}
  async getMany(filter: any) {}
  async deleteOne(id: number) {}
  async create(dto: NewCategoryDto) {}
  async update(id: number, dto: UpdateCategoryDto) {}
}
