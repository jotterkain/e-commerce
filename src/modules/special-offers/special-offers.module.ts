import { Module } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';
import { SpecialOffersController } from './special-offers.controller';

@Module({
  providers: [SpecialOffersService],
  controllers: [SpecialOffersController]
})
export class SpecialOffersModule {}
