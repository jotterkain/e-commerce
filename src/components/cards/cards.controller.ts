import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto, UpdateCardDto } from './dto';

@Controller('cards')
export class CardsController {
  constructor(private cardService: CardsService) {
  }

  @Get()
  getCards() {
    return this.cardService.getCards();
  }

  @Get(':id')
  getCard(@Param('id') id: string) {
    return this.cardService.getCard(id);
  }

  @Post()
  createCard(@Body() cardDto: CreateCardDto) {
    return this.cardService.createCard(cardDto);
  }

  @Put(':id')
  updateCard(@Param('id') id: string, @Body() cardDto: UpdateCardDto) {
    return this.cardService.updateCard(id, cardDto);
  }

  @Delete(':id')
  deleteCard(@Param('id') id: string) {
    return this.cardService.deleteCard(id);
  }

}
