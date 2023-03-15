import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private cardService: CardsService) {
  }

  @Post()
  createCard(@Body() text){
    return this.cardService.createCard(text.text);
  }

  @Get()
  getCard(@Body() text){
    return this.cardService.getCard(text.text);
  }
}
