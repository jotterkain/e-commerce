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
import { ProductsService } from './products.service'
import { NewProductDto, QueryProductDto, UpdateProductDto } from '@eshop/core'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getMany(@Query() filter: QueryProductDto) {
    return this.productsService.getMany(filter)
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.getOne(id)
  }

  @Post()
  create(@Body() dto: NewProductDto) {
    return this.productsService.create(dto)
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
  ) {
    return this.productsService.update(id, dto)
  }

  @Delete('id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.deleteOne(id)
  }
}
