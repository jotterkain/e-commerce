import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto, UpdateCardDto } from './dto';

@Controller('cards')
export class CardsController {
  constructor(private cardService: CardsService) {
  }

  @Get()
  findAll() {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardService.findOne(id);
  }

  @Post()
  create(@Body() cardDto: CreateCardDto) {
    return this.cardService.create(cardDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cardDto: UpdateCardDto) {
    return this.cardService.update(id, cardDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cardService.delete(id);
  }

}
