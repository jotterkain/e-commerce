import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrderDto } from './dto';
import { Order } from '@prisma/client';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(orderDto: CreateOrderDto): Promise<Order>;
    findALl(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    updateOrderDeliveredStatus(id: string, delivered: boolean): Promise<Order>;
    findByCustomer(customerId: string): Promise<Order[]>;
}
