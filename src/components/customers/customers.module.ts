import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomersModule {}
