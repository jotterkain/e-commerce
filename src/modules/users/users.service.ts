import { deleteFile, generateRandomString } from '@eshop/common'
import { NewUserDto, QueryUserDto, UpdateUserDto } from '@eshop/core'
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { isEmpty } from 'class-validator'
import { PrismaService } from 'src/prisma/prisma.service'
import { SecurityService } from 'src/security/security.service'
import { Request } from 'express'

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService, private securityService: SecurityService) { }

  async getOne(id: string) {
    return await this.prismaService.user.findUnique({ where: { id } })
  }

  async getMany(filter: QueryUserDto) {
    return await this.prismaService.user.findMany({ where: filter })
  }

  /**
   * @todo delete files
  **/
  async deleteOne(id: string) {
    return await this.prismaService.user.delete({ where: { id } })
  }

  async toogleActive(id: string) {
    return await this.prismaService.user.update({
      where: { id },
      data: {
        active: !(await this.getOne(id))?.active
      }
    })
  }

  /**
   * @todo verification phone number
  **/
  async create(dto: NewUserDto) {
    if (!dto.first_name && !dto.last_name) {
      throw new BadRequestException("Both first_name and last_name can't be empty")
    }
    if (!dto.first_name || !dto.last_name) {
      dto.first_name = dto.last_name ?? dto.first_name
    }
    const hash = await this.securityService.hash(dto.password)
    delete dto.password

    let username: string

    do {
      username = dto.first_name + generateRandomString(6)
    }
    while (!isEmpty(await this.prismaService.user.findFirst({ where: { username } })))


    return await this.prismaService.user.create({
      data: { username: username, ...dto, hash: hash }
    })
  }

  async update(id: string, dto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: dto
    })
  }

  async getFirst(filter: QueryUserDto) {
    return await this.prismaService.user.findFirst({ where: filter })
  }

  async setPicture(req: Request, id: string, filename: string) {
    try {
      const url = `${req.protocol}://${req.headers.host}/api/res/${filename}`
      const oldPictureUrl = (await this.getOne(id))?.picture
      const oldPictureName = oldPictureUrl?.split("/").pop()
      const updatedUser = await this.prismaService.user.update({
        where: { id },
        data: {
          picture: url
        },
        select: {
          id: true,
          username: true,
          picture: true
        }
      })
      deleteFile(oldPictureName)
      return updatedUser
    } catch (error) {
      deleteFile(filename)
      throw error
    }
  }

  /**
   * @todo verify email
  **/
  async setEmail(id: string, email: string) {
    return await this.prismaService.user.update({
      where: { id },
      data: {
        email: email
      }
    })
  }

  /**
   * @todo verification phone number
  **/
  async addPhoneNumber(id: string, phone: string) {
    let exists = (await this.getOne(id))?.phones.includes(phone);
    if (exists)
      throw new ConflictException("This phone number already exists")
    return await this.prismaService.user.update({
      where: {
        id
      },
      data: {
        phones: {
          push: phone
        }
      }
    })
  }

  async removePhoneNumber(id: string, phone: string) {
    let phones = (await this.getOne(id))?.phones
    let exists = phones.includes(phone);
    if (!exists)
      throw new NotFoundException("This phone number does not exists")
    let index = phones.indexOf(phone);
    let popped = phones.splice(index, 1);
    return await this.prismaService.user.update({
      where: {
        id
      },
      data: {
        phones: {
          set: popped
        }
      }
    })
  }
}
