import { SpecialOffersService } from './special-offers.service';
import { CreateSpecialOfferDto, UpdateSpecialOfferDto } from './dto';
import { SpecialOffers } from '@prisma/client';
export declare class SpecialOffersController {
    private specialOffersService;
    constructor(specialOffersService: SpecialOffersService);
    findAll(): Promise<SpecialOffers[]>;
    findOne(id: string): Promise<SpecialOffers>;
    create(createSpecialOfferDto: CreateSpecialOfferDto): Promise<SpecialOffers>;
    update(id: string, updateSpecialOfferDto: UpdateSpecialOfferDto): Promise<SpecialOffers>;
    delete(id: string): Promise<SpecialOffers>;
    addProduct(id: string, productId: string): Promise<SpecialOffers>;
    removeProduct(id: string, productId: string): Promise<SpecialOffers>;
}
