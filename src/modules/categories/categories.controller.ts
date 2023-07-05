import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { NewCategoryDto, UpdateCategoryDto } from '@eshop/core/dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getOne(id);
  }

  @Get()
  getMany(@Query() filter: any) {
    return this.categoriesService.getMany(filter);
  }

  @Get(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteOne(id);
  }

  @Post()
  create(@Body() dto: NewCategoryDto) {
    return this.categoriesService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, dto);
  }
}
