import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Put,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { QueryUserDto, UpdateUserDto } from '@eshop/core'
import { FileInterceptor } from '@nestjs/platform-express'
import { Request } from 'express'

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @Get()
  getMany(@Query() filter: QueryUserDto) {
    return this.usersService.getMany(filter)
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getOne(id)
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto)
  }

  @Delete('id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.deleteOne(id)
  }

  @Put(":id/picture")
  @UseInterceptors(FileInterceptor("file"))
  setPicture(@UploadedFile(new ParseFilePipe({ fileIsRequired: true })) file: Express.Multer.File, @Param('id') id: string, @Req() req: Request) {
    return this.usersService.setPicture(req, id, file.filename)
  }

  @Put(":id/phone")
  addPhoneNumber(@Param('id') id: string, @Body("phone") phone: string) {
    return this.usersService.addPhoneNumber(id, phone)
  }

  @Delete(":id/phone/:phone")
  removePhoneNumber(@Param('id',ParseUUIDPipe) id: string, @Param('phone') phone: string) {
    return this.usersService.removePhoneNumber(id, phone)
  }

  @Put(":id/email")
  setEmail(@Param('id',ParseUUIDPipe) id: string, @Body("email") email: string) {
    return this.usersService.setEmail(id, email)
  }

  @Put(":id/active")
  toogleActive(@Param('id',ParseUUIDPipe) id: string) {
    return this.usersService.toogleActive(id)
  }
}
