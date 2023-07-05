import { IsInt, IsNotEmpty, IsString } from 'class-validator'

export class ProducCategoryDto {
  @IsNotEmpty()
  @IsInt()
  id: number
}
