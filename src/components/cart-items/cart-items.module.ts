import { Module } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { CartItemsController } from './cart-items.controller';

@Module({
  providers: [CartItemsService],
  controllers: [CartItemsController]
})
export class CartItemsModule {}
