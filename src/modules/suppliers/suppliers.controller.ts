import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
import { Supplier } from '@prisma/client';

@Controller('suppliers')
export class SuppliersController {
  constructor(private suppliersService: SuppliersService) {}

  @Get()
  findAll(): Promise<Supplier[]> {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Supplier> {
    return this.suppliersService.findOne(id);
  }

  @Post()
  create(@Body() supplierDto: CreateSupplierDto): Promise<Supplier> {
    return this.suppliersService.create(supplierDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() supplierDto: UpdateSupplierDto): Promise<Supplier> {
    return this.suppliersService.update(id, supplierDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Supplier> {
    return this.suppliersService.delete(id);
  }
}