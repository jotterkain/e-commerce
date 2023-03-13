import { Test, TestingModule } from '@nestjs/testing';
import { SpecialOffersService } from './special-offers.service';

describe('SpecialOffersService', () => {
  let service: SpecialOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialOffersService],
    }).compile();

    service = module.get<SpecialOffersService>(SpecialOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
