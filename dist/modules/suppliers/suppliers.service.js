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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let SuppliersService = class SuppliersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        try {
            return await this.prismaService.supplier.findMany();
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.supplier.findUnique({
                where: { id },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async create(supplierDto) {
        try {
            return await this.prismaService.supplier.create({
                data: {
                    name: supplierDto.name,
                    email: supplierDto.email,
                    phoneNumber: supplierDto.phoneNumber,
                    address: {
                        create: supplierDto.address,
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async update(id, supplierDto) {
        try {
            return await this.prismaService.supplier.update({
                where: { id },
                data: {
                    name: supplierDto.name,
                    email: supplierDto.email,
                    phoneNumber: supplierDto.phoneNumber,
                    address: {
                        upsert: {
                            create: supplierDto.address,
                            update: supplierDto.address,
                        },
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async delete(id) {
        try {
            return await this.prismaService.supplier.delete({
                where: { id },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
};
SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SuppliersService);
exports.SuppliersService = SuppliersService;
//# sourceMappingURL=suppliers.service.js.map