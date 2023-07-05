import { IsInt, IsOptional, IsString } from "class-validator"

export class QueryProductDto {
    @IsOptional()
    @IsString()
    name?:string
    @IsOptional()
    @IsString()
    price?:string
    @IsOptional()
    @IsInt()
    category_name:string
}