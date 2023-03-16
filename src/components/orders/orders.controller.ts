import { Controller, Get, Post, Param, Body, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll() {
    return await this.ordersService.findALl();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ordersService.findOne(id);
  }

  @Patch(':id/delivered')
  async updateDeliveredStatus(@Param('id') id: string, @Body('delivered') delivered: boolean) {
    return await this.ordersService.updateOrderDeliveredStatus(id, delivered);
  }

  @Get('customer/:customerId')
  async findByCustomer(@Param('customerId') customerId: string) {
    return await this.ordersService.findByCustomer(customerId);
  }
}
