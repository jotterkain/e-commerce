import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
