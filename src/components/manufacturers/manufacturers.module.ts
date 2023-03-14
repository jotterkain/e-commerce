import { Module } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import { ManufacturersController } from './manufacturers.controller';

@Module({
  providers: [ManufacturersService],
  controllers: [ManufacturersController]
})
export class ManufacturersModule {}
