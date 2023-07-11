import { NewCategoryDto, QueryCategoryDto, UpdateCategoryDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Request } from "express"
import { deleteFile } from '@eshop/common'

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) { }

  async getOne(id: number) {
    return await this.prismaService.category.findUnique({ where: { id } })
  }

  async getMany(filter: QueryCategoryDto) {
    return await this.prismaService.category.findMany({ where: filter })
  }
  async deleteOne(id: number) {
    const deleted = await this.prismaService.category.delete({ where: { id } })
    deleteFile(deleted.hero?.split("/").pop())
  }

  async create(dto: NewCategoryDto) {
    return await this.prismaService.category.create({
      data: dto
    })
  }

  async update(id: number, dto: UpdateCategoryDto) {
    return await this.prismaService.category.update({
      where: { id },
      data: dto
    })
  }

  async setHero(req: Request, id: number, filename:string) {
    try {
      const url = `${req.protocol}://${req.headers.host}/api/res/${filename}`
      const oldHeroUrl = (await this.getOne(id))?.hero
      const oldHeroName = oldHeroUrl?.split("/").pop()
      const updatedCategory = await this.prismaService.category.update({
        where: { id },
        data: {
          hero: url
        },
        select: {
          id: true,
          name: true,
          hero: true
        }
      })
      deleteFile(oldHeroName)
      return updatedCategory
    } catch (error) {
      deleteFile(filename)
      throw error
    }
  }
}
