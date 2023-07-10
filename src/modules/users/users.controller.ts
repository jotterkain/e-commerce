import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Put,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { QueryUserDto, UpdateUserDto } from '@eshop/core'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import * as path from 'path'
import { Request } from 'express'
import { uploadDirProvider } from '@eshop/common'

@Controller('users')
export class UsersController {

  private readonly logger = new Logger(UsersController.name)

  constructor(private usersService: UsersService) {}

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
    return this.usersService.setPicture(req,id,file.filename)
  }
}
