export declare class CreateOrderDto {
    customerId: string;
    items: OrderItemDto[];
    addressId: string;
    cardId: string;
}
declare class OrderItemDto {
    productId: string;
    quantity: number;
}
export {};
