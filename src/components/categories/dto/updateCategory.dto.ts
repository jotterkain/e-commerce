import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  name: string
  @IsOptional()
  @IsString()
  description: string
  @IsOptional()
  @IsInt()
  parentId: number
}