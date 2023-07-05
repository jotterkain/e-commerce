import { NewAddressDto, UpdateAddressDto } from '@eshop/core/dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressesService {
    constructor(private prismaService: PrismaService) { }

    async getOne(id:string) { }
    async getMany(filter:any) {}
    async create(dto:NewAddressDto) { }
    async update(id:string,dto:UpdateAddressDto) { }
    async deleteOne(id:string) { }

}
