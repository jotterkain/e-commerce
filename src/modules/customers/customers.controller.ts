import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, FavDto, UpdateCustomerDto, WishDto } from './dto';
import { Customer } from '@prisma/client';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() customerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(customerDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customerDto: UpdateCustomerDto): Promise<Customer> {
    return this.customersService.update(id, customerDto);
  }

  @Delete('id')
  delete(@Param('id') id: string): Promise<Customer> {
    return this.customersService.delete(id);
  }

  @Post(':id/wishlist')
  addProductToWishList(@Param('id') id: string, @Body() body: { productId: string }) {
    let wishDto: WishDto = { id, productId: body.productId };
    return this.customersService.addProductToWishList(wishDto);
  }

  @Delete(':id/wishlist')
  removeProductFromWishList(@Param('id') id: string, @Body() body: { productId: string }) {
    let wishDto: WishDto = { id, productId: body.productId };
    return this.customersService.removeProductFromWishList(wishDto);
  }

  @Post(':id/favorites')
  addProductToFavorites(@Param('id') id: string, @Body() body: { productId: string }) {
    let favDto: FavDto = { id, productId: body.productId };
    return this.customersService.addProductToFavorites(favDto);
  }

  @Delete(':id/favorites')
  removeProductFromFavorites(@Param('id') id: string, @Body() body: { productId: string }) {
    let favDto: FavDto = { id, productId: body.productId };
    return this.customersService.removeProductFromFavorites(favDto);
  }
}
