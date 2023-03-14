import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string
  @IsOptional()
  @IsString()
  description: string
  @IsOptional()
  @IsInt()
  parentId: string
}