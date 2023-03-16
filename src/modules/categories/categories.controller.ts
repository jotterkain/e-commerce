import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { Category } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() categoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(categoryDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() categoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoriesService.update(id, categoryDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.delete(id);
  }
}
