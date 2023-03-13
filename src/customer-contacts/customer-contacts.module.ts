import { Module } from '@nestjs/common';
import { CustomerContactsService } from './customer-contacts.service';
import { CustomerContactsController } from './customer-contacts.controller';

@Module({
  providers: [CustomerContactsService],
  controllers: [CustomerContactsController]
})
export class CustomerContactsModule {}
