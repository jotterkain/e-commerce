import { IsUUID } from 'class-validator';

export class CardDto {
  @IsUUID()
  id: string;
  @IsUUID()
  cardId: string;
}