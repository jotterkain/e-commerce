import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';
import { Customer } from '@prisma/client';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<Customer[]>;
    findOne(id: string): Promise<Customer>;
    create(customerDto: CreateCustomerDto): Promise<Customer>;
    update(id: string, customerDto: UpdateCustomerDto): Promise<Customer>;
    delete(id: string): Promise<Customer>;
    addProductToWishList(id: string, body: {
        productId: string;
    }): Promise<{
        id: string;
        firstName: string;
        wishList: {
            id: string;
            name: string;
        }[];
    }>;
    removeProductFromWishList(id: string, body: {
        productId: string;
    }): Promise<{
        id: string;
        firstName: string;
        wishList: import("@prisma/client").Product[];
    }>;
    addProductToFavorites(id: string, body: {
        productId: string;
    }): Promise<{
        id: string;
        firstName: string;
        favorites: {
            id: string;
            name: string;
        }[];
    }>;
    removeProductFromFavorites(id: string, body: {
        productId: string;
    }): Promise<{
        id: string;
        firstName: string;
        favorites: {
            id: string;
            name: string;
        }[];
    }>;
    addCard(id: string, body: {
        cardId: string;
    }): Promise<{
        id: string;
        firstName: string;
        savedCards: {
            id: string;
            ownerName: string;
        }[];
    }>;
    removeCard(id: string, body: {
        cardId: string;
    }): Promise<{
        id: string;
        firstName: string;
        savedCards: {
            id: string;
            ownerName: string;
        }[];
    }>;
}
