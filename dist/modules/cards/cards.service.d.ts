import { PrismaService } from '../../prisma/prisma.service';
import { SecurityService } from '../../security/security.service';
import { CreateCardDto } from './dto';
import { Card } from '@prisma/client';
export declare class CardsService {
    private prismaService;
    private securityService;
    constructor(prismaService: PrismaService, securityService: SecurityService);
    create(cardDto: CreateCardDto): Promise<Card>;
    findAll(): Promise<Card[]>;
    findOne(id: string): Promise<Card>;
    delete(id: string): Promise<Card>;
}
