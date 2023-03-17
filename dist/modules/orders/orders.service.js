"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(orderDto) {
        try {
            return await this.prismaService.order.create({
                data: {
                    customer: {
                        connect: {
                            id: orderDto.customerId,
                        },
                    },
                    items: {
                        create: orderDto.items.map(item => ({
                            quantity: item.quantity,
                            product: {
                                connect: {
                                    id: item.productId,
                                },
                            },
                        })),
                    },
                    deliveryAddress: {
                        connect: {
                            id: orderDto.addressId,
                        },
                    },
                    paidWith: {
                        connect: {
                            id: orderDto.cardId,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findALl() {
        try {
            return await this.prismaService.order.findMany();
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.order.findUnique({
                where: {
                    id: id,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async updateOrderDeliveredStatus(id, delivered) {
        try {
            return await this.prismaService.order.update({
                where: {
                    id: id,
                },
                data: {
                    delivered: delivered,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findByCustomer(customerId) {
        return await this.prismaService.order.findMany({
            where: { customerId },
            include: { items: true, deliveryAddress: true },
        });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map