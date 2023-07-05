import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class NewProductDto {
    @IsNotEmpty()
    @IsString()
    name:string
    @IsOptional()
    @IsString()
    description?:string
    @IsNotEmpty()
    @IsString()
    price:string
    @IsNotEmpty()
    @IsString()
    category_name:string
    @IsOptional()
    @IsString()
    hero?:string
    @IsNotEmpty()
    @IsArray()
    images:string[]
    @IsNotEmpty()
    @IsArray()
    options: ProductOption[]
}

class ProductOption {
    @IsNotEmpty()
    @IsString()
    option:string
    @IsNotEmpty()
    @IsString()
    label:string
    @IsOptional()
    @IsString()
    description?:string
    @IsNotEmpty()
    @IsString()
    price:string
}