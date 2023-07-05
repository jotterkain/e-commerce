import { IsOptional, IsString } from 'class-validator';

export class QueryCategoryDto {
  @IsOptional()
  @IsString()
  name: string;
}
