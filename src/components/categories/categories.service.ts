import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { CreateCategoryDto } from './dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll() {
    try {
      return await this.prismaService.category.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string) {
    try {
      parseInt(id)
    }catch (err){
      throw new BadRequestException("Validation error: invalid value passed")
    }
    try {
      return await this.prismaService.category.findUnique({ where: { id: parseInt(id) } });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(categoryDto: CreateCategoryDto) {
    try {
      return await this.prismaService.category.create({ data: categoryDto });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, categoryDto: UpdateCategoryDto) {
    try {
      parseInt(id)
    }catch (err){
      throw new BadRequestException("Validation error: invalid value passed")
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

  async delete(id: string) {
    try {
      parseInt(id)
    }catch (err){
      throw new BadRequestException("Validation error: invalid value passed")
    }
    try {
      return await this.prismaService.category.findUnique({ where: { id: parseInt(id) } });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
