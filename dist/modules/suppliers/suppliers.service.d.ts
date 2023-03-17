import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
import { Supplier } from '@prisma/client';
export declare class SuppliersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<Supplier[]>;
    findOne(id: string): Promise<Supplier>;
    create(supplierDto: CreateSupplierDto): Promise<Supplier>;
    update(id: string, supplierDto: UpdateSupplierDto): Promise<Supplier>;
    delete(id: string): Promise<Supplier>;
}
