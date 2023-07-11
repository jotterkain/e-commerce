import {
  Body,
  Controller,
  Get,
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
import { Request } from 'express'

@Controller('categories')
export class CategoriesController {

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
  @UseInterceptors(FileInterceptor("file"))
  setHero(@UploadedFile(new ParseFilePipe({ fileIsRequired: true })) file: Express.Multer.File, @Param('id', ParseIntPipe, new ValidationPipe({ transform: true })) id: number, @Req() req: Request) {
    return this.categoriesService.setHero(req, id, file.filename)
  }
}
