import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AddImagesDto, CreateProductDto, ImageDto, UpdateProductDto } from './dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }

  @Post()
  async create(@Body() productDto: CreateProductDto) {
    return await this.productService.create(productDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() productDto: UpdateProductDto) {
    return await this.productService.update(id, productDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.productService.delete(id);
  }

  @Post(':id/images')
  async addImage(@Param('id') id: string, @Body() { url }: ImageDto) {
    return await this.productService.addImage(id, url);
  }

  @Post(':id/images/batch')
  async addImages(@Param('id') id: string, @Body() body: AddImagesDto) {
    const arrayOfUrls = body.urls.map((e) => e.url);
    return this.productService.addImages(id, arrayOfUrls);
  }

  @Delete(':id/images')
  async removeImages(@Param('id') id: string, @Body() body: AddImagesDto) {
    const arrayOfUrls = body.urls?.map((e) => e.url);
    return await this.productService.removeImages(id, arrayOfUrls);
  }
}
