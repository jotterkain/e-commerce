import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CardDto, CreateCustomerDto, FavDto, UpdateCustomerDto, WishDto } from './dto';
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
  findOne(@Param('id',ParseUUIDPipe) id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() customerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(customerDto);
  }

  @Put(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() customerDto: UpdateCustomerDto): Promise<Customer> {
    return this.customersService.update(id, customerDto);
  }

  @Delete('id')
  delete(@Param('id',ParseUUIDPipe) id: string): Promise<Customer> {
    return this.customersService.delete(id);
  }

  @Post(':id/wishlist')
  addProductToWishList(@Param('id',ParseUUIDPipe) id: string, @Body() body: { productId: string }) {
    let wishDto: WishDto = { id, productId: body.productId };
    return this.customersService.addProductToWishList(wishDto);
  }

  @Delete(':id/wishlist')
  removeProductFromWishList(@Param('id',ParseUUIDPipe) id: string, @Body() body: { productId: string }) {
    let wishDto: WishDto = { id, productId: body.productId };
    return this.customersService.removeProductFromWishList(wishDto);
  }

  @Post(':id/favorites')
  addProductToFavorites(@Param('id',ParseUUIDPipe) id: string, @Body() body: { productId: string }) {
    let favDto: FavDto = { id, productId: body.productId };
    return this.customersService.addProductToFavorites(favDto);
  }

  @Delete(':id/favorites')
  removeProductFromFavorites(@Param('id',ParseUUIDPipe) id: string, @Body() body: { productId: string }) {
    let favDto: FavDto = { id, productId: body.productId };
    return this.customersService.removeProductFromFavorites(favDto);
  }

  @Post(':id/cards')
  addCard(@Param('id',ParseUUIDPipe) id: string, @Body() body: { cardId: string }) {
    let cardDto: CardDto = { id, cardId: body.cardId };
    return this.customersService.addCard(cardDto);
  }

  @Delete(':id/cards')
  removeCard(@Param('id') id: string, @Body() body: { cardId: string }) {
    let cardDto: CardDto = { id, cardId: body.cardId };
    return this.customersService.removeCard(cardDto);
  }
}
