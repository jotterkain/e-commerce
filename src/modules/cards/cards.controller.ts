import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto';
import { Card } from '@prisma/client';

@Controller('cards')
export class CardsController {
  constructor(private cardService: CardsService) {
  }

  @Get()
  findAll(): Promise<Card[]> {
    return this.cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Card> {
    return this.cardService.findOne(id);
  }

  @Post()
  create(@Body() cardDto: CreateCardDto): Promise<Card> {
    return this.cardService.create(cardDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Card> {
    return this.cardService.delete(id);
  }

}
