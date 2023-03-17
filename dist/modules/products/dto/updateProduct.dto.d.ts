import { ImageDto } from './image.dto';
export declare class UpdateProductDto {
    name: string;
    categoryId: number;
    stock: number;
    price: number;
    images: ImageDto[];
    supplierId: string;
    manufacturerId: string;
}
