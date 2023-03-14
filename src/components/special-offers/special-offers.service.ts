import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SpecialOffersService {
  constructor(private prismaService: PrismaService) {
  }
}
