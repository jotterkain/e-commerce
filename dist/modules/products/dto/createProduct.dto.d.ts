import { ImageDto } from './image.dto';
export declare class CreateProductDto {
    name: string;
    categoryId: string;
    stock: number;
    price: number;
    images: ImageDto[];
    supplierId: string;
    manufacturerId: string;
}
