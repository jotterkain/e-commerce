import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { requestErrorThrow } from '../../utils/helpers/request.errors';
import { CreateAddressDto } from './dto';
import { UpdateAddressDto } from './dto/updateAddress.dto';

@Injectable()
export class AddressesService {
  constructor(private prismaService: PrismaService) {
  }

  async getAddresses() {
    try {
      return await this.prismaService.address.findMany();
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async getAddress(id: string) {
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

  async createAddress(addressDto: CreateAddressDto) {
    if ((addressDto.neighborhood === undefined || addressDto.neighborhood.trim().length === 0) && (addressDto.postalCode === undefined || addressDto.postalCode.trim().length === 0)) {
      throw new BadRequestException('Both neighborhood and PostalCode can\'t be empty.');
    }

    try {
      return await this.prismaService.address.create({ data: addressDto });
    } catch (err) {
      requestErrorThrow(err);
    }
  }

  async updateAddress(id: string, addressDto: UpdateAddressDto) {
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

  async deleteAddress(id: string) {
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
