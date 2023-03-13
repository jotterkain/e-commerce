import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';

@Module({
  providers: [SuppliersService],
  controllers: [SuppliersController]
})
export class SuppliersModule {}
