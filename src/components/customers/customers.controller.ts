import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() customerDto: CreateCustomerDto) {
    return this.customersService.create(customerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customerDto: UpdateCustomerDto) {
    return this.customersService.update(id, customerDto);
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return this.customersService.delete(id);
  }
}
