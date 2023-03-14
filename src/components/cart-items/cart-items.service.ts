import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CartItemsService {
  constructor(private prismaService: PrismaService) {
  }
}
