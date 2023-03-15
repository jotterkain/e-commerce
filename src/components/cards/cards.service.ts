import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SecurityService } from '../../security/security.service';
import { CreateCardDto, UpdateCardDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';

@Injectable()
export class CardsService {
  constructor(private prismaService: PrismaService, private securityService: SecurityService) {
  }

  async createCard(cardDto: CreateCardDto) {
    const [ownerName, cardNumber, cvv] = await Promise.all([
      this.securityService.encrypt(cardDto.ownerName),
      this.securityService.encrypt(cardDto.cardNumber),
      this.securityService.encrypt(cardDto.cvv.toString()),
    ]);
    try {
      const data = {
        ownerName,
        cardNumber,
        cvv,
        expirationDate: cardDto.expirationDate,
      };
      return await this.prismaService.card.create({ data });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async getCards() {
    try {
      const encryptedCards = await this.prismaService.card.findMany();
      return await Promise.all(encryptedCards.map(async (card) => {
        return {
          id: card.id,
          ownerName: this.securityService.decrypt(card.ownerName),
          cardNumber: this.securityService.decrypt(card.cardNumber),
          cvv: this.securityService.decrypt(card.cvv.toString()),
          expirationDate: card.expirationDate,
          createdAt: card.createdAt,
          updatedAt: card.updatedAt,
        };
      }));
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async getCard(id: string) {
    try {
      return await this.prismaService.card.findUnique({
        where: {
          id,
        },
      }).then(async (card) => {
        return {
          id: card.id,
          ownerName: this.securityService.decrypt(card.ownerName),
          cardNumber: this.securityService.decrypt(card.cardNumber),
          cvv: this.securityService.decrypt(card.cvv.toString()),
          expirationDate: card.expirationDate,
          createdAt: card.createdAt,
          updatedAt: card.updatedAt,
        };
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async updateCard(id: string, cardDto: UpdateCardDto) {
    const { ownerName, cardNumber, expirationDate, cvv } = cardDto;
    try {
      return await this.prismaService.card.update({
        where: { id },
        data: {
          ownerName: this.securityService.encryptOr(ownerName),
          cardNumber: this.securityService.encryptOr(cardNumber),
          expirationDate: expirationDate,
          cvv: this.securityService.encryptOr(cvv),
        },
      }).then(() => {
        return this.getCard(id);
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async deleteCard(id: string) {
    try {
      return await this.prismaService.card.delete({
        where: { id },
      }).then(() => {
        return this.getCard(id);
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

}
