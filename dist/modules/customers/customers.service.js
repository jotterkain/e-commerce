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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let CustomersService = class CustomersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        try {
            return await this.prismaService.customer.findMany();
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.customer.findUnique({
                where: { id: id },
                include: {
                    wishList: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                        },
                    },
                    favorites: {
                        select: {
                            id: true,
                            name: true,
                            price: true,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async create(customerDto) {
        try {
            return await this.prismaService.customer.create({
                data: {
                    firstName: customerDto.firstName,
                    lastName: customerDto.lastName,
                    email: customerDto.email,
                    phoneNumber: customerDto.phoneNumber,
                    dateOfBirth: customerDto.dateOfBirth,
                    address: {
                        create: customerDto.address,
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async update(id, customerDto) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    firstName: customerDto.firstName,
                    lastName: customerDto.lastName,
                    email: customerDto.email,
                    phoneNumber: customerDto.phoneNumber,
                    dateOfBirth: customerDto.dateOfBirth,
                    address: {
                        upsert: {
                            create: customerDto.address,
                            update: customerDto.address
                        }
                    }
                }
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async delete(id) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    hibernated: true,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async addProductToWishList({ id, productId }) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    wishList: {
                        connect: {
                            id: productId,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    wishList: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async removeProductFromWishList({ id, productId }) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    wishList: {
                        disconnect: {
                            id: productId,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    wishList: true,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async addProductToFavorites({ id, productId }) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    favorites: {
                        connect: {
                            id: productId,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    favorites: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async removeProductFromFavorites({ id, productId }) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    favorites: {
                        disconnect: {
                            id: productId,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    favorites: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async addCard({ id, cardId }) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    savedCards: {
                        connect: {
                            id: cardId,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    savedCards: {
                        select: {
                            id: true,
                            ownerName: true,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async removeCard({ id, cardId }) {
        try {
            return await this.prismaService.customer.update({
                where: { id },
                data: {
                    savedCards: {
                        disconnect: {
                            id: cardId,
                        },
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    savedCards: {
                        select: {
                            id: true,
                            ownerName: true,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map