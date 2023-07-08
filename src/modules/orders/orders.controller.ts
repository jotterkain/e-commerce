import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { OrdersService } from './orders.service'
import { NewOrderDto, QueryOrderDto, UpdateOrderDto } from '@eshop/core'

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  create(@Body() dto: NewOrderDto) {
    return this.ordersService.create(dto)
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateOrderDto) {
    return this.ordersService.update(id, dto)
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.getOne(id)
  }

  @Get()
  getMany(@Query() filter: QueryOrderDto) {
    return this.ordersService.getMany(filter)
  }
}
