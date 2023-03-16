import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto , UpdateAddressDto} from './dto';

@Controller('addresses')
export class AddressesController {
  constructor(private addressService: AddressesService) {
  }

  @Get()
  findAll() {
    return this.addressService.finAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }

  @Post()
  create(@Body() addressDto: CreateAddressDto) {
    return this.addressService.create(addressDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() addressDto: UpdateAddressDto) {
    return this.addressService.update(id, addressDto);
  }

  @Delete('id')
  delete(@Param('id') id: string) {
    return this.addressService.delete(id);
  }
}
