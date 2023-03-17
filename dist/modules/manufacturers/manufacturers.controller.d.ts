import { ManufacturersService } from './manufacturers.service';
import { CreateManufacturerDto, UpdateManufacturerDto } from './dto';
import { Manufacturer } from '@prisma/client';
export declare class ManufacturersController {
    private manufacturersService;
    constructor(manufacturersService: ManufacturersService);
    findAll(): Promise<Manufacturer[]>;
    findOne(id: string): Promise<Manufacturer>;
    create(manufacturerDto: CreateManufacturerDto): Promise<Manufacturer>;
    update(id: string, manufacturerDto: UpdateManufacturerDto): Promise<Manufacturer>;
    delete(id: string): Promise<Manufacturer>;
}
