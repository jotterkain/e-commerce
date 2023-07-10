import { deleteFile, generateRandomString, uploadDirProvider } from '@eshop/common'
import { NewUserDto, QueryUserDto, UpdateUserDto } from '@eshop/core'
import { BadRequestException, Injectable } from '@nestjs/common'
import { isEmpty } from 'class-validator'
import * as path from 'path'
import { PrismaService } from 'src/prisma/prisma.service'
import { SecurityService } from 'src/security/security.service'
import * as fs from "fs"
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

  async deleteOne(id: string) {
    return await this.prismaService.user.delete({ where: { id } })
  }

  async toogleActive(id: string) {
    return await this.prismaService.user.update({
      where: { id },
      data: {
        active: !(await this.getOne(id)).active
      }
    })
  }

  async create(dto: NewUserDto) {
    if (!dto.first_name && !dto.last_name) {
      throw new BadRequestException("Both first_name and last_name can't be empty")
    }
    if (!dto.first_name || !dto.last_name) {
      dto.first_name = dto.last_name ?? dto.first_name
    }
    const hash = await this.securityService.hash(dto.password)
    delete dto.password

    let username: string;

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
}
