import { PrismaService } from '../../prisma/prisma.service';
import { CreateAddressDto, UpdateAddressDto } from './dto';
import { Address } from '@prisma/client';
export declare class AddressesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    finAll(): Promise<Address[]>;
    findOne(id: string): Promise<Address>;
    create(addressDto: CreateAddressDto): Promise<Address>;
    update(id: string, addressDto: UpdateAddressDto): Promise<Address>;
    delete(id: string): Promise<Address>;
}
