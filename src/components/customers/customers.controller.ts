import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {
  }

  @Get()
  getCustomers() {
    return this.customersService.getCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return this.customersService.getCustomer(id);
  }

  @Post()
  createCustomer(@Body() customerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(customerDto);
  }

  @Put(':id')
  updateCustomer(@Param('id') id: string, @Body() customerDto: UpdateCustomerDto) {
    return this.customersService.updateCustomer(id, customerDto);
  }

  @Delete('id')
  deleteCustomer(@Param('id') id: string) {
    return this.customersService.deleteCustomer(id);
  }
}
