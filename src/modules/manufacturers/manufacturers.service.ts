import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { Manufacturer } from '@prisma/client';

@Injectable()
export class ManufacturersService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll(): Promise<Manufacturer[]> {
    try {
      return await this.prismaService.manufacturer.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string): Promise<Manufacturer> {
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

  async create(manufacturerDto: CreateManufacturerDto): Promise<Manufacturer> {
    try {
      return await this.prismaService.manufacturer.create({
        data: manufacturerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, manufacturerDto: UpdateManufacturerDto): Promise<Manufacturer> {
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

  async delete(id: string): Promise<Manufacturer> {
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
