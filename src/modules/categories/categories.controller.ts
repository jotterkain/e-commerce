import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Logger,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
  ValidationPipe
} from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { NewCategoryDto, QueryCategoryDto, UpdateCategoryDto } from '@eshop/core'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import path, { join } from 'path'
import { Request } from 'express'
import { rename } from 'node:fs'
import { uploadDirProvider } from '@eshop/common'

@Controller('categories')
export class CategoriesController {
  
  private readonly logger = new Logger(CategoriesController.name);

  constructor(private categoriesService: CategoriesService) { }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe, new ValidationPipe({ transform: true })) id: number) {
    return this.categoriesService.getOne(id)
  }

  @Get()
  getMany(@Query() filter: QueryCategoryDto) {
    return this.categoriesService.getMany(filter)
  }

  @Get(':id')
  deleteOne(@Param('id', ParseIntPipe, new ValidationPipe({ transform: true })) id: number) {
    return this.categoriesService.deleteOne(id)
  }

  @Post()
  create(@Body() dto: NewCategoryDto) {
    return this.categoriesService.create(dto)
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe, new ValidationPipe({ transform: true })) id: number,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, dto)
  }

  @Put(":id/hero")
  @UseInterceptors(FileInterceptor("file", {
    storage: diskStorage({
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
        cb(null, `${randomName}${path.extname(file.originalname)}`)
      }
    })
  }))
  setHero(@UploadedFile(new ParseFilePipe({ fileIsRequired: true })) file: Express.Multer.File, @Param('id', ParseIntPipe, new ValidationPipe({ transform: true })) id: number, @Req() req: Request) {
    rename(file.path, join(uploadDirProvider(), file.filename), (err) => {
      if (err) this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException()
    });
    console.log(file.destination)
    return null
  }
}
