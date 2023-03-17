import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { Category } from '@prisma/client';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    create(categoryDto: CreateCategoryDto): Promise<Category>;
    update(id: number, categoryDto: UpdateCategoryDto): Promise<Category>;
    delete(id: number): Promise<Category>;
}
