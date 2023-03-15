import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SecurityService } from '../../security/security.service';

@Injectable()
export class CardsService {
  constructor(private prismaService: PrismaService, private securityService: SecurityService) {
  }

  createCard(text: string) {
    return this.securityService.decrypt(text);
  }

  getCard(text:string){
    return this.securityService.encrypt(text)
  }
}
