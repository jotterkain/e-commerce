import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';

@Module({
  providers: [CartsService]
})
export class CartsModule {}
