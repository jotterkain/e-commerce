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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const security_service_1 = require("../../security/security.service");
const request_errors_1 = require("../../utils/helpers/request.errors");
let CardsService = class CardsService {
    constructor(prismaService, securityService) {
        this.prismaService = prismaService;
        this.securityService = securityService;
    }
    async create(cardDto) {
        const [ownerName, cardNumber, cvv] = await Promise.all([
            this.securityService.encrypt(cardDto.ownerName),
            this.securityService.encrypt(cardDto.cardNumber),
            this.securityService.encrypt(cardDto.cvv.toString()),
        ]);
        try {
            const data = {
                ownerName,
                cardNumber,
                cvv,
                expirationDate: cardDto.expirationDate,
            };
            return await this.prismaService.card.create({ data });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findAll() {
        try {
            const encryptedCards = await this.prismaService.card.findMany();
            return await Promise.all(encryptedCards.map(async (card) => {
                return {
                    id: card.id,
                    ownerName: this.securityService.decrypt(card.ownerName),
                    cardNumber: this.securityService.decrypt(card.cardNumber),
                    cvv: this.securityService.decrypt(card.cvv.toString()),
                    expirationDate: card.expirationDate,
                    createdAt: card.createdAt,
                    updatedAt: card.updatedAt,
                };
            }));
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async findOne(id) {
        try {
            return await this.prismaService.card.findUnique({
                where: {
                    id,
                },
            }).then(async (card) => {
                if (!card) {
                    return null;
                }
                return {
                    id: card.id,
                    ownerName: this.securityService.decrypt(card.ownerName),
                    cardNumber: this.securityService.decrypt(card.cardNumber),
                    cvv: this.securityService.decrypt(card.cvv.toString()),
                    expirationDate: card.expirationDate,
                    createdAt: card.createdAt,
                    updatedAt: card.updatedAt,
                };
            });
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
    async delete(id) {
        try {
            await this.prismaService.card.delete({
                where: { id },
            });
            return await this.findOne(id);
        }
        catch (err) {
            (0, request_errors_1.requestErrorThrow)(err);
        }
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, security_service_1.SecurityService])
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map