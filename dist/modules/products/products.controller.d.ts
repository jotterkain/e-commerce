import { ProductsService } from './products.service';
import { AddImagesDto, CreateProductDto, ImageDto, UpdateProductDto } from './dto';
import { Product } from '@prisma/client';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(productDto: CreateProductDto): Promise<Product>;
    update(id: string, productDto: UpdateProductDto): Promise<Product>;
    delete(id: string): Promise<Product>;
    addImage(id: string, { url }: ImageDto): Promise<Product>;
    addImages(id: string, body: AddImagesDto): Promise<void>;
    removeImages(id: string, body: AddImagesDto): Promise<Product>;
}
