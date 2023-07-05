import {
  IsCreditCard,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class QueryCardDto {
  @IsOptional()
  @IsUUID()
  owner_id: string;
}
