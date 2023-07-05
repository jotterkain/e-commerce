import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class NewCategoryDto {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsOptional()
    @IsString()
    description?: string
    @IsNotEmpty()
    @IsArray()
    parent_ids: string[]
}