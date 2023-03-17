import { PrismaService } from '../../prisma/prisma.service';
import { CreateCustomerDto, CardDto, FavDto, UpdateCustomerDto, WishDto } from './dto';
import { Customer } from '@prisma/client';
export declare class CustomersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<Customer[]>;
    findOne(id: string): Promise<Customer>;
    create(customerDto: CreateCustomerDto): Promise<Customer>;
    update(id: string, customerDto: UpdateCustomerDto): Promise<Customer>;
    delete(id: string): Promise<Customer>;
    addProductToWishList({ id, productId }: WishDto): Promise<{
        id: string;
        firstName: string;
        wishList: {
            id: string;
            name: string;
        }[];
    }>;
    removeProductFromWishList({ id, productId }: WishDto): Promise<{
        id: string;
        firstName: string;
        wishList: import("@prisma/client").Product[];
    }>;
    addProductToFavorites({ id, productId }: FavDto): Promise<{
        id: string;
        firstName: string;
        favorites: {
            id: string;
            name: string;
        }[];
    }>;
    removeProductFromFavorites({ id, productId }: FavDto): Promise<{
        id: string;
        firstName: string;
        favorites: {
            id: string;
            name: string;
        }[];
    }>;
    addCard({ id, cardId }: CardDto): Promise<{
        id: string;
        firstName: string;
        savedCards: {
            id: string;
            ownerName: string;
        }[];
    }>;
    removeCard({ id, cardId }: CardDto): Promise<{
        id: string;
        firstName: string;
        savedCards: {
            id: string;
            ownerName: string;
        }[];
    }>;
}
