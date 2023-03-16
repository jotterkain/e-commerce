import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(id);
  }

  @Post()
  create(@Body() supplierDto: CreateSupplierDto) {
    return this.suppliersService.create(supplierDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() supplierDto: UpdateSupplierDto) {
    return this.suppliersService.update(id, supplierDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.suppliersService.delete(id);
  }
}