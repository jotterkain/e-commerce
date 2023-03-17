import { CardsService } from './cards.service';
import { CreateCardDto } from './dto';
import { Card } from '@prisma/client';
export declare class CardsController {
    private cardService;
    constructor(cardService: CardsService);
    findAll(): Promise<Card[]>;
    findOne(id: string): Promise<Card>;
    create(cardDto: CreateCardDto): Promise<Card>;
    delete(id: string): Promise<Card>;
}
