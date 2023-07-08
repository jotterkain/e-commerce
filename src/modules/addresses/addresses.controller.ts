import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { AddressesService } from './addresses.service'
import { NewAddressDto, QueryAddressDto, UpdateAddressDto } from '@eshop/core'

@Controller('addresses')
export class AddressesController {
  constructor(private addressesService: AddressesService) {}

  @Get()
  getMany(@Query() filter: QueryAddressDto) {
    return this.addressesService.getMany(filter)
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.addressesService.getOne(id)
  }

  @Post()
  create(@Body() dto: NewAddressDto) {
    return this.addressesService.create(dto)
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAddressDto,
  ) {
    return this.addressesService.update(id, dto)
  }

  @Delete('id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.addressesService.deleteOne(id)
  }
}
