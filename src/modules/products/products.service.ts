import { deleteFile } from '@eshop/common'
import { NewProductDto, ProductOptionDto, QueryProductDto, UpdateProductDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { Request } from 'express'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) { }

  async getOne(id: string) {
    return await this.prismaService.product.findUnique({ where: { id } })
  }

  async getMany(filter: QueryProductDto) {
    return await this.prismaService.product.findMany({ where: filter })
  }

  async deleteOne(id: string) {
    const deleted = await this.prismaService.product.delete({ where: { id } })
    deleted.images.forEach(i => {
      let filename = i.split("/").pop()
      deleteFile(filename)
    })
    deleteFile(deleted.hero?.split("/").pop())
  }

  async create(dto: NewProductDto) {
    let options = dto.options
    let categories = dto.categories
    delete dto.options
    delete dto.categories
    return await this.prismaService.product.create({
      data: {
        ...dto,
        categories: {
          connect: categories.map(c_id => {
            return {
              id: c_id
            }
          })
        },
        options: {
          createMany: {
            data: options
          }
        }
      }
    })
  }

  async update(id: string, dto: UpdateProductDto) {
    return await this.prismaService.product.update({
      where: { id },
      data: dto
    })
  }

  async addOption(product_id: string, option: ProductOptionDto) {
    return await this.prismaService.product.update({
      where: { id: product_id },
      data: {
        options: {
          create: option
        }
      }
    })
  }

  async removeOption(option_id: string) {
    return await this.prismaService.productOption.delete({
      where: {
        id: option_id
      }
    })
  }

  async addCategory(product_id: string, category_id?: number, category_name?: string) {
    return await this.prismaService.product.update({
      where: {
        id: product_id,
      },
      data: {
        categories: {
          connectOrCreate: {
            where: {
              id: category_id,
              name: category_name
            },
            create: {
              name: category_name
            },
          }
        }
      }
    })
  }

  async removeCategory(product_id: string, category_id?: number, category_name?: string) {
    return await this.prismaService.product.update({
      where: {
        id: product_id,
      },
      data: {
        categories: {
          disconnect: {
            id: category_id,
            name: category_name
          }
        }
      }
    })
  }

  async addImage(req: Request, id: string, filename: string) {
    try {
      const url = `${req.protocol}://${req.headers.host}/api/res/${filename}`
      return await this.prismaService.product.update({
        where: { id },
        data: {
          images: {
            push: url
          }
        },
        select: {
          id: true,
          name: true,
          images: true,
        }
      })
    }
    catch (error) {
      deleteFile(filename)
      throw error
    }
  }

  async removeImage(req: Request, id: string, filename: string) {
    let images = (await this.getOne(id)).images
    let index = images.indexOf(`${req.protocol}://${req.headers.host}/api/res/${filename}`)
    let popped = images.splice(index, 1)
    const updatedProduct = await this.prismaService.product.update({
      where: {
        id
      },
      data: {
        images: {
          set: popped
        }
      }
    })
    deleteFile(filename)
  }

  async setHero(req: Request, id: string, filename: string) {
    try {
      const url = `${req.protocol}://${req.headers.host}/api/res/${filename}`
      const oldHeroUrl = (await this.getOne(id))?.hero
      const oldHeroName = oldHeroUrl?.split("/").pop()
      const updatedProduct = await this.prismaService.product.update({
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
      return updatedProduct
    } catch (error) {
      deleteFile(filename)
      throw error
    }
  }
}
