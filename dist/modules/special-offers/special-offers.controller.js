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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialOffersController = void 0;
const common_1 = require("@nestjs/common");
const special_offers_service_1 = require("./special-offers.service");
const dto_1 = require("./dto");
let SpecialOffersController = class SpecialOffersController {
    constructor(specialOffersService) {
        this.specialOffersService = specialOffersService;
    }
    findAll() {
        return this.specialOffersService.findAll();
    }
    findOne(id) {
        return this.specialOffersService.findOne(id);
    }
    create(createSpecialOfferDto) {
        return this.specialOffersService.create(createSpecialOfferDto);
    }
    update(id, updateSpecialOfferDto) {
        return this.specialOffersService.update(id, updateSpecialOfferDto);
    }
    delete(id) {
        return this.specialOffersService.delete(id);
    }
    async addProduct(id, productId) {
        return this.specialOffersService.addProduct(id, productId);
    }
    async removeProduct(id, productId) {
        return this.specialOffersService.removeProduct(id, productId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateSpecialOfferDto]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateSpecialOfferDto]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id/products/:productId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Put)(':id/products/:productId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "removeProduct", null);
SpecialOffersController = __decorate([
    (0, common_1.Controller)('special-offers'),
    __metadata("design:paramtypes", [special_offers_service_1.SpecialOffersService])
], SpecialOffersController);
exports.SpecialOffersController = SpecialOffersController;
//# sourceMappingURL=special-offers.controller.js.map