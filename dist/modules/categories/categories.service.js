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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let CategoriesService = class CategoriesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll() {
        try {
            return await this.prismaService.category.findMany();
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.category.findUnique({ where: { id: id } });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async create(categoryDto) {
        try {
            return await this.prismaService.category.create({ data: categoryDto });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async update(id, categoryDto) {
        try {
            return await this.prismaService.category.update({
                where: { id: id },
                data: categoryDto,
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async delete(id) {
        try {
            return await this.prismaService.category.findUnique({ where: { id: id } });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map