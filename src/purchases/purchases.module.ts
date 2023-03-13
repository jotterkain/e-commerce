import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';

@Module({
  providers: [PurchasesService],
  controllers: [PurchasesController]
})
export class PurchasesModule {}
