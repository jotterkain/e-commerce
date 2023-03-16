import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';
import { CreateSpecialOfferDto, UpdateSpecialOfferDto } from './dto';
import { SpecialOffers } from '@prisma/client';

@Controller('special-offers')
export class SpecialOffersController {
  constructor(private specialOffersService: SpecialOffersService) {
  }

  @Get()
  findAll(): Promise<SpecialOffers[]> {
    return this.specialOffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<SpecialOffers> {
    return this.specialOffersService.findOne(id);
  }

  @Post()
  create(@Body() createSpecialOfferDto: CreateSpecialOfferDto): Promise<SpecialOffers> {
    return this.specialOffersService.create(createSpecialOfferDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecialOfferDto: UpdateSpecialOfferDto,
  ): Promise<SpecialOffers> {
    return this.specialOffersService.update(id, updateSpecialOfferDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<SpecialOffers> {
    return this.specialOffersService.delete(id);
  }

  @Put(':id/products/:productId')
  async addProduct(@Param('id') id: string, @Param('productId') productId: string): Promise<SpecialOffers> {
    return this.specialOffersService.addProduct(id, productId);
  }

  @Put(':id/products/:productId')
  async removeProduct(@Param('id') id: string, @Param('productId') productId: string): Promise<SpecialOffers> {
    return this.specialOffersService.removeProduct(id, productId);
  }

}
