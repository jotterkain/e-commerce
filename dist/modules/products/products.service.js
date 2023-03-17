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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let ProductsService = class ProductsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        try {
            return await this.prismaService.product.findMany();
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.product.findUnique({
                where: {
                    id,
                },
                include: {
                    category: true,
                    supplier: true,
                    manufacturer: true,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async create(productDto) {
        try {
            return await this.prismaService.product.create({
                data: {
                    name: productDto.name,
                    stock: productDto.stock,
                    price: productDto.price,
                    images: productDto.images.map((image) => image.url),
                    categoryId: parseInt(productDto.categoryId),
                    supplierId: productDto.supplierId,
                    manufacturerId: productDto.manufacturerId,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async update(id, productDto) {
        var _a;
        try {
            return await this.prismaService.product.update({
                where: {
                    id,
                },
                data: {
                    name: productDto.name,
                    stock: productDto.stock,
                    price: productDto.price,
                    images: (_a = productDto.images) === null || _a === void 0 ? void 0 : _a.map((image) => image.url),
                    categoryId: productDto.categoryId,
                    supplierId: productDto.supplierId,
                    manufacturerId: productDto.manufacturerId,
                },
                include: {
                    category: true,
                    supplier: true,
                    manufacturer: true,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async delete(id) {
        try {
            return await this.prismaService.product.delete({
                where: {
                    id,
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async addImage(id, imageUrl) {
        var _a;
        try {
            const product = await this.prismaService.product.findUnique({
                where: {
                    id,
                },
                select: {
                    images: true,
                },
            });
            if ((_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.includes(imageUrl)) {
                return await this.findOne(id);
            }
            return await this.prismaService.product.update({
                where: {
                    id,
                },
                data: {
                    images: {
                        push: imageUrl,
                    },
                },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async addImages(id, imageUrls) {
        try {
            return imageUrls.forEach((url) => this.addImage(id, url));
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async removeImages(id, imageUrls) {
        var _a;
        try {
            const product = await this.prismaService.product.findUnique({
                where: { id },
            });
            const updatedImages = (_a = product === null || product === void 0 ? void 0 : product.images) === null || _a === void 0 ? void 0 : _a.filter((image) => !(imageUrls === null || imageUrls === void 0 ? void 0 : imageUrls.includes(image)));
            return await this.prismaService.product.update({
                where: { id },
                data: { images: updatedImages },
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map