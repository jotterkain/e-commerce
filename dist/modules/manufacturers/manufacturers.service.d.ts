import { PrismaService } from '../../prisma/prisma.service';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto';
import { Manufacturer } from '@prisma/client';
export declare class ManufacturersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<Manufacturer[]>;
    findOne(id: string): Promise<Manufacturer>;
    create(manufacturerDto: CreateManufacturerDto): Promise<Manufacturer>;
    update(id: string, manufacturerDto: UpdateManufacturerDto): Promise<Manufacturer>;
    delete(id: string): Promise<Manufacturer>;
}
