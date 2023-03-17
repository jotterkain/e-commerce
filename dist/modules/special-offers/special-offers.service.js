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
exports.SpecialOffersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let SpecialOffersService = class SpecialOffersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        try {
            return await this.prismaService.specialOffers.findMany();
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.specialOffers.findUnique({
                where: {
                    id,
                },
                include: {
                    products: true,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async create(createSpecialOfferDto) {
        try {
            return await this.prismaService.specialOffers.create({ data: createSpecialOfferDto });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async update(id, updateSpecialOfferDto) {
        try {
            return await this.prismaService.specialOffers.update({
                where: {
                    id,
                },
                data: updateSpecialOfferDto
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async delete(id) {
        try {
            return await this.prismaService.specialOffers.delete({ where: { id } });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async addProduct(specialOfferId, productId) {
        try {
            return await this.prismaService.specialOffers.update({
                where: {
                    id: specialOfferId,
                },
                data: {
                    products: {
                        connect: {
                            id: productId,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async removeProduct(specialOfferId, productId) {
        try {
            return await this.prismaService.specialOffers.update({
                where: {
                    id: specialOfferId,
                },
                data: {
                    products: {
                        disconnect: {
                            id: productId,
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
SpecialOffersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpecialOffersService);
exports.SpecialOffersService = SpecialOffersService;
//# sourceMappingURL=special-offers.service.js.map