import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prismaService: PrismaService) {
  }
}
