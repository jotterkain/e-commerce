import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { Supplier } from '@prisma/client';

@Injectable()
export class SuppliersService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll(): Promise<Supplier[]> {
    try {
      return await this.prismaService.supplier.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string): Promise<Supplier> {
    try {
      return await this.prismaService.supplier.findUnique({
        where: {
          id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(supplierDto: CreateSupplierDto): Promise<Supplier> {
    try {
      return await this.prismaService.supplier.create({
        data: supplierDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, supplierDto: UpdateSupplierDto): Promise<Supplier> {
    try {
      return await this.prismaService.supplier.update({
        where: {
          id,
        },
        data: supplierDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string): Promise<Supplier> {
    try {
      return await this.prismaService.supplier.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
