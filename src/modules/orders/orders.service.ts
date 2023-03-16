import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrderDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {
  }

  async create(orderDto: CreateOrderDto): Promise<Order> {
    try {
      return await this.prismaService.order.create({
        data: {
          customer: {
            connect: {
              id: orderDto.customerId,
            },
          },
          items: {
            create: orderDto.items.map(item => ({
              quantity: item.quantity,
              product: {
                connect: {
                  id: item.productId,
                },
              },
            })),
          },
          deliveryAddress: {
            connect: {
              id: orderDto.addressId,
            },
          },
          paidWith: {
            connect: {
              id: orderDto.cardId,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findALl(): Promise<Order[]> {
    try {
      return await this.prismaService.order.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string): Promise<Order> {
    try {
      return await this.prismaService.order.findUnique({
        where: {
          id: id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async updateOrderDeliveredStatus(id: string, delivered: boolean): Promise<Order> {
    try {
      return await this.prismaService.order.update({
        where: {
          id: id,
        },
        data: {
          delivered: delivered,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findByCustomer(customerId: string): Promise<Order[]> {
    return await this.prismaService.order.findMany({
      where: { customerId },
      include: { items: true, deliveryAddress: true },
    });
  }
}
