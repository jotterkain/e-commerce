import { AddressesService } from './addresses.service';
import { CreateAddressDto, UpdateAddressDto } from './dto';
import { Address } from '@prisma/client';
export declare class AddressesController {
    private addressService;
    constructor(addressService: AddressesService);
    findAll(): Promise<Address[]>;
    findOne(id: string): Promise<Address>;
    create(addressDto: CreateAddressDto): Promise<Address>;
    update(id: string, addressDto: UpdateAddressDto): Promise<Address>;
    delete(id: string): Promise<Address>;
}
