import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';

@Injectable()
export class ManufacturersService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll() {
    try {
      return await this.prismaService.manufacturer.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.manufacturer.findUnique({
        where: {
          id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(manufacturerDto: CreateManufacturerDto) {
    try {
      return await this.prismaService.manufacturer.create({
        data: manufacturerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, manufacturerDto: UpdateManufacturerDto) {
    try {
      return await this.prismaService.manufacturer.update({
        where: {
          id,
        },
        data: manufacturerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string) {
    try {
      return await this.prismaService.manufacturer.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
