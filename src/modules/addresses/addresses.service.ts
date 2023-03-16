import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { CreateAddressDto, UpdateAddressDto } from './dto';
import { Address } from '@prisma/client';

@Injectable()
export class AddressesService {
  constructor(private prismaService: PrismaService) {
  }

  async finAll(): Promise<Address[]> {
    try {
      return await this.prismaService.address.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async findOne(id: string): Promise<Address> {
    try {
      return await this.prismaService.address.findUnique({
        where: {
          id: id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async create(addressDto: CreateAddressDto): Promise<Address> {
    if (!(addressDto.neighborhood?.trim() || addressDto.postalCode?.trim())) {
      throw new BadRequestException('Both neighborhood and PostalCode can\'t be empty.');
    }
    try {
      return await this.prismaService.address.create({ data: addressDto });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async update(id: string, addressDto: UpdateAddressDto): Promise<Address> {
    try {
      return await this.prismaService.address.update({
        where: {
          id: id,
        },
        data: addressDto,
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async delete(id: string): Promise<Address> {
    try {
      return await this.prismaService.address.delete({
        where: {
          id: id,
        },
      });
    } catch (err) {
      requestErrorThrow(err);
    }
  }
}
