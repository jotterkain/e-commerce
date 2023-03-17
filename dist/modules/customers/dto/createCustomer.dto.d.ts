import { CreateAddressDto } from '../../addresses/dto';
export declare class CreateCustomerDto {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: CreateAddressDto;
}
