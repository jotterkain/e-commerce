import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCardDto {
  @IsNotEmpty()
  @IsUUID()
  id: string
}