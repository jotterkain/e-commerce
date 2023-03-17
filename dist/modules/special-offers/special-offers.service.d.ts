import { PrismaService } from '../../prisma/prisma.service';
import { SpecialOffers } from '@prisma/client';
import { CreateSpecialOfferDto, UpdateSpecialOfferDto } from './dto';
export declare class SpecialOffersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<SpecialOffers[]>;
    findOne(id: string): Promise<SpecialOffers>;
    create(createSpecialOfferDto: CreateSpecialOfferDto): Promise<SpecialOffers>;
    update(id: string, updateSpecialOfferDto: UpdateSpecialOfferDto): Promise<SpecialOffers>;
    delete(id: string): Promise<SpecialOffers>;
    addProduct(specialOfferId: string, productId: string): Promise<SpecialOffers>;
    removeProduct(specialOfferId: string, productId: string): Promise<SpecialOffers>;
}
