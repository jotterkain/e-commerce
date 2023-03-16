import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto';

@Controller('manufacturers')
export class ManufacturersController {
  constructor(private manufacturersService: ManufacturersService) {}

  @Get()
  findAll() {
    return this.manufacturersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufacturersService.findOne(id);
  }

  @Post()
  create(@Body() manufacturerDto: CreateManufacturerDto) {
    return this.manufacturersService.create(manufacturerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() manufacturerDto: UpdateManufacturerDto) {
    return this.manufacturersService.update(id, manufacturerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.manufacturersService.delete(id);
  }
}
