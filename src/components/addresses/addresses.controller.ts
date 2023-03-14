import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto';
import { UpdateAddressDto } from './dto/updateAddress.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private addressService: AddressesService) {
  }

  @Get()
  getAddresses() {
    return this.addressService.getAddresses();
  }

  @Get(':id')
  getAddress(@Param('id') id: string) {
    return this.addressService.getAddress(id);
  }

  @Post()
  createAddress(@Body() addressDto: CreateAddressDto) {
    return this.addressService.createAddress(addressDto);
  }

  @Put(':id')
  updateAddress(@Param('id') id: string, @Body() addressDto: UpdateAddressDto) {
    return this.addressService.updateAddress(id, addressDto);
  }

  @Delete('id')
  deleteAddress(@Param('id') id: string) {
    return this.addressService.deleteAddress(id);
  }
}
