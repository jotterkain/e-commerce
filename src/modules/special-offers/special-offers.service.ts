import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SpecialOffers } from '@prisma/client';
import { CreateSpecialOfferDto, UpdateSpecialOfferDto } from './dto';
import { requestErrorThrow } from '../../utils/helpers/request.errors';

@Injectable()
export class SpecialOffersService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<SpecialOffers[]> {
    try {
      return await this.prismaService.specialOffers.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string): Promise<SpecialOffers> {
    try {
      return await this.prismaService.specialOffers.findUnique({
        where: {
          id,
        },
        include: {
          products: true,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(createSpecialOfferDto: CreateSpecialOfferDto): Promise<SpecialOffers> {
    try {
      return await this.prismaService.specialOffers.create({ data: createSpecialOfferDto});
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, updateSpecialOfferDto: UpdateSpecialOfferDto): Promise<SpecialOffers> {
    try {
      return await this.prismaService.specialOffers.update({
        where: {
          id,
        },
        data: updateSpecialOfferDto
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string): Promise<SpecialOffers> {
    try {
      return await this.prismaService.specialOffers.delete({ where: { id }});
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async addProduct(specialOfferId: string, productId: string): Promise<SpecialOffers> {
    try {
      return await this.prismaService.specialOffers.update({
        where: {
          id: specialOfferId,
        },
        data: {
          products: {
            connect: {
              id: productId,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async removeProduct(specialOfferId: string, productId: string): Promise<SpecialOffers> {
    try {
      return await this.prismaService.specialOffers.update({
        where: {
          id: specialOfferId,
        },
        data: {
          products: {
            disconnect: {
              id: productId,
            },
          },
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

}
