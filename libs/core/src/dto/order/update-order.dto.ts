import { IsNotEmpty, IsString } from "class-validator";

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsString()
    address_id:string
}