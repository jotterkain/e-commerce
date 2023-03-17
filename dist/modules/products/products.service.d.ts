import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from '@prisma/client';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(productDto: CreateProductDto): Promise<Product>;
    update(id: string, productDto: UpdateProductDto): Promise<Product>;
    delete(id: string): Promise<Product>;
    addImage(id: string, imageUrl: string): Promise<Product>;
    addImages(id: string, imageUrls: string[]): Promise<void>;
    removeImages(id: string, imageUrls: string[]): Promise<Product>;
}
