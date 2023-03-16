import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto , UpdateAddressDto} from './dto';
import { Address } from '@prisma/client';

@Controller('addresses')
export class AddressesController {
  constructor(private addressService: AddressesService) {
  }

  @Get()
  findAll(): Promise<Address[]> {
    return this.addressService.finAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Address> {
    return this.addressService.findOne(id);
  }

  @Post()
  create(@Body() addressDto: CreateAddressDto): Promise<Address> {
    return this.addressService.create(addressDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() addressDto: UpdateAddressDto): Promise<Address> {
    return this.addressService.update(id, addressDto);
  }

  @Delete('id')
  delete(@Param('id') id: string): Promise<Address> {
    return this.addressService.delete(id);
  }
}
