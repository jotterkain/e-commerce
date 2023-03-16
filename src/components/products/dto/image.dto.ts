import { IsNotEmpty, IsUrl } from 'class-validator';

export class ImageDto {
  @IsNotEmpty()
  @IsUrl()
  url: string
}