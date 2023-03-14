import { Controller } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';

@Controller('cart-items')
export class CartItemsController {
  constructor(private cartItemsService: CartItemsService) {
  }
}
