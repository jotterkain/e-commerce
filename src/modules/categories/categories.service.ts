import { NewCategoryDto, QueryCategoryDto, UpdateCategoryDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { Express } from "express"
import path from 'path'
import * as fs from "fs"
import { uploadDirProvider } from '@eshop/common'

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
    return await this.prismaService.category.delete({ where: { id } })
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

  async setHero(id: number, destination: string,filename:string) {
    try{
      return await this.prismaService.category.update({
        where: { id },
        data: {
          hero: destination
        }
      })
    }catch(error) {
      if (fs.existsSync(path.resolve(uploadDirProvider(), `${filename}`))) {
        fs.rmSync(path.resolve(uploadDirProvider(), `${filename}`))
    }
    throw error
    }
    
  }
}
