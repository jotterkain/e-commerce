import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';

@Injectable()
export class CustomersService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll() {
    try {
      return await this.prismaService.customer.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.customer.findUnique({
        where: {
          id: id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(customerDto: CreateCustomerDto) {
    try {
      return await this.prismaService.customer.create({
        data: customerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, customerDto: UpdateCustomerDto) {
    try {
      return await this.prismaService.customer.update({
        where: {
          id: id,
        },
        data: customerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string) {
    try {
      return await this.prismaService.customer.update({
        where: {
          id: id,
        },
        data: {
          hibernated: true,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

}
