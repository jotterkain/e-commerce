import { IsArray, IsInt, IsOptional, IsString } from "class-validator"

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    name?:string
    @IsOptional()
    @IsString()
    description?:string
    @IsOptional()
    @IsString()
    price?:string
    @IsOptional()
    @IsString()
    category_name:string
    @IsOptional()
    @IsString()
    hero?:string
    @IsOptional()
    @IsArray()
    images?:string[]
}