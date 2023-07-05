import { IsInt, IsNotEmpty } from 'class-validator';

export class CategoryParentDto {
  @IsNotEmpty()
  @IsInt()
  id: number;
}
