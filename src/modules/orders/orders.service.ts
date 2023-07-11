import { NewOrderDto, UpdateOrderDto } from '@eshop/core'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { ProductsService } from '../products/products.service'

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService, private productService: ProductsService) { }

  async create(dto: NewOrderDto, user_id: string) {

    let total = 0;

    dto.order_items.forEach(async (item) => {
      let itemTotal = 0
      let product = await this.productService.getOne(item.product_id)
      let product_price = parseFloat(product.price.toString())
      itemTotal = product_price
      if (item.options.length > 0) {
        item.options.forEach(async (option) => {
          itemTotal += parseFloat(option.price)
        })
      }
      total += itemTotal
    })
    
    return await this.prismaService.order.create({
      data: {
        total: total,
        user: {
          connect: {
            id: user_id
          }
        },
        order_items: {
          createMany: {
            data: dto.order_items
          }
        },
        payment: {
          connect: {
            id: dto.payment_id
          }
        },
        address: {
          connect: {
            id: dto.address_id
          }
        }
      }
    })
  }

  async update(id: string, dto: UpdateOrderDto) { }

  async getOne(id: string) { }

  async getMany(filter: any) { }
}
