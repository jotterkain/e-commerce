import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCustomerDto, FavDto, UpdateCustomerDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { Customer } from '@prisma/client';
import { WishDto } from './dto/wish.dto';

@Injectable()
export class CustomersService {
  constructor(private prismaService: PrismaService) {
  }

  async findAll(): Promise<Customer[]> {
    try {
      return await this.prismaService.customer.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string): Promise<Customer> {
    try {
      return await this.prismaService.customer.findUnique({
        where: { id: id },
        include: {
          wishList: {
            select: {
              id: true,
              name: true,
              price: true,
            },
          },
          favorites: {
            select: {
              id: true,
              name: true,
              price: true,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(customerDto: CreateCustomerDto): Promise<Customer> {
    try {
      return await this.prismaService.customer.create({
        data: customerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, customerDto: UpdateCustomerDto): Promise<Customer> {
    try {
      return await this.prismaService.customer.update({
        where: { id },
        data: customerDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string): Promise<Customer> {
    try {
      return await this.prismaService.customer.update({
        where: { id },
        data: {
          hibernated: true,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async addProductToWishList({ id, productId }: WishDto) {
    try {
      return await this.prismaService.customer.update({
        where: { id },
        data: {
          wishList: {
            connect: {
              id: productId,
            },
          },
        },
        select: {
          id: true,
          firstName: true,
          wishList: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async removeProductFromWishList({ id, productId }: WishDto) {
    try {
      return await this.prismaService.customer.update({
        where: { id },
        data: {
          wishList: {
            disconnect: {
              id: productId,
            },
          },
        },
        select: {
          id: true,
          firstName: true,
          wishList: true,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async addProductToFavorites({ id, productId }: FavDto) {
    try {
      return await this.prismaService.customer.update({
        where: { id },
        data: {
          favorites: {
            connect: {
              id: productId,
            },
          },
        },
        select: {
          id: true,
          firstName: true,
          favorites: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async removeProductFromFavorites({ id, productId }: FavDto) {
    try {
      return await this.prismaService.customer.update({
        where: { id },
        data: {
          favorites: {
            disconnect: {
              id: productId,
            },
          },
        },
        select: {
          id: true,
          firstName: true,
          favorites: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
