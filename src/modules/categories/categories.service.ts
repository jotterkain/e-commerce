import { BadRequestException, Injectable } from '@nestjs/common';
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

  async findOne(id: string): Promise<Category> {
    try {
      parseInt(id);
    } catch (err) {
      throw new BadRequestException('Validation error: invalid value passed');
    }
    try {
      return await this.prismaService.category.findUnique({ where: { id: parseInt(id) } });
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

  async update(id: string, categoryDto: UpdateCategoryDto): Promise<Category> {
    try {
      parseInt(id);
    } catch (err) {
      throw new BadRequestException('Validation error: invalid value passed');
    }
    try {
      return await this.prismaService.category.update({
        where: { id: parseInt(id) },
        data: categoryDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string): Promise<Category> {
    try {
      parseInt(id);
    } catch (err) {
      throw new BadRequestException('Validation error: invalid value passed');
    }
    try {
      return await this.prismaService.category.findUnique({ where: { id: parseInt(id) } });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
