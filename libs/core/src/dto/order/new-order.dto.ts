import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsString } from "class-validator"

export class NewOrderDto {
    @IsNotEmpty()
    @IsString()
    user_id:string
    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    order_items: OrderItem[]
    @IsNotEmpty()
    @IsString()
    card_id:string
    @IsNotEmpty()
    @IsString()
    address_id:string
}

export class OrderItem {
    @IsNotEmpty()
    @IsString()
    product_id:string
    @IsNotEmpty()
    @IsInt()
    quantity:number
}