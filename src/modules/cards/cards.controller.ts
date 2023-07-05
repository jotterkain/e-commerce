import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common'
import { CardsService } from './cards.service'
import { NewCardDto } from '@eshop/core/dto'

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.cardsService.getOne(id)
  }

  @Get()
  getMany(@Query() filter: any) {
    return this.cardsService.getMany(filter)
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.cardsService.deleteOne(id)
  }

  @Post()
  create(@Body() dto: NewCardDto) {
    return this.cardsService.create(dto)
  }
}
