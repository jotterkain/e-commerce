import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto';
import { Manufacturer } from '@prisma/client';

@Controller('manufacturers')
export class ManufacturersController {
  constructor(private manufacturersService: ManufacturersService) {
  }

  @Get()
  findAll(): Promise<Manufacturer[]> {
    return this.manufacturersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Manufacturer> {
    return this.manufacturersService.findOne(id);
  }

  @Post()
  create(@Body() manufacturerDto: CreateManufacturerDto): Promise<Manufacturer> {
    return this.manufacturersService.create(manufacturerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() manufacturerDto: UpdateManufacturerDto): Promise<Manufacturer> {
    return this.manufacturersService.update(id, manufacturerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Manufacturer> {
    return this.manufacturersService.delete(id);
  }
}
