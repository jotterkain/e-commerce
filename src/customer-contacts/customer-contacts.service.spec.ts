import { Test, TestingModule } from '@nestjs/testing';
import { CustomerContactsService } from './customer-contacts.service';

describe('CustomerContactsService', () => {
  let service: CustomerContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerContactsService],
    }).compile();

    service = module.get<CustomerContactsService>(CustomerContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
