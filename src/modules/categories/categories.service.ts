import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { CreateCategoryDto } from './dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll(): Promise<Category[]> {
    try {
      return await this.prismaService.category.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: number): Promise<Category> {
    try {
      return await this.prismaService.category.findUnique({ where: { id: id } });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    try {
      return await this.prismaService.category.create({ data: categoryDto });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: number, categoryDto: UpdateCategoryDto): Promise<Category> {
    try {
      return await this.prismaService.category.update({
        where: { id: id },
        data: categoryDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: number): Promise<Category> {
    try {
      return await this.prismaService.category.findUnique({ where: { id: id } });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
