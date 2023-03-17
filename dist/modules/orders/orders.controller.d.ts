import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto';
import { Order } from '@prisma/client';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    updateDeliveredStatus(id: string, delivered: boolean): Promise<Order>;
    findByCustomer(customerId: string): Promise<Order[]>;
}
