import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto';
import { Supplier } from '@prisma/client';
export declare class SuppliersController {
    private suppliersService;
    constructor(suppliersService: SuppliersService);
    findAll(): Promise<Supplier[]>;
    findOne(id: string): Promise<Supplier>;
    create(supplierDto: CreateSupplierDto): Promise<Supplier>;
    update(id: string, supplierDto: UpdateSupplierDto): Promise<Supplier>;
    delete(id: string): Promise<Supplier>;
}
