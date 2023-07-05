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
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { NewProductDto, UpdateAddressDto } from '@eshop/core/dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getMany(@Query() filter: any) {
    return this.productsService.getMany(filter);
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.getOne(id);
  }

  @Post()
  create(@Body() dto: NewProductDto) {
    return this.productsService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateAddressDto,
  ) {
    return this.productsService.update(id, dto);
  }

  @Delete('id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.deleteOne(id);
  }
}
