import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { QueryUserDto, UpdateUserDto } from '@eshop/core'
import { FileInterceptor } from '@nestjs/platform-express'
import { rename } from 'fs'
import { diskStorage } from 'multer'
import path, { join } from 'path'
import * as fs from "fs"
import { uploadDirProvider } from '@eshop/common'
import { AuthGuard } from 'src/guards'
import { AlterGuard } from 'src/guards/alter.guard'

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

  @Put(":id/pp")
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${path.extname(file.originalname)}`)
      }
    })
  }))
  setPP(@UploadedFile(new ParseFilePipe({ fileIsRequired: true })) file: Express.Multer.File, @Param('id', ParseIntPipe, new ValidationPipe({ transform: true })) id: number, @Req() req: Request) {
    rename(file.path, join(uploadDirProvider(), file.filename), (err) => {
      if (err) this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException()
    });
    console.log(file.destination)
    return null
  }
}
