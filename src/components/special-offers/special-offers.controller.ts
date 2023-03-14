import { Controller } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';

@Controller('special-offers')
export class SpecialOffersController {
  constructor(private specialOffersService: SpecialOffersService) {
  }
}
