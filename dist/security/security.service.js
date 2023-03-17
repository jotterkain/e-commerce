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
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const util_1 = require("util");
let SecurityService = class SecurityService {
    constructor(config) {
        this.config = config;
    }
    async onModuleInit() {
        try {
            const password = this.config.get('ENCRYPT_PASSWORD');
            this.iv = Buffer.from(this.config.get('ENCRYPT_IV'), 'base64');
            this.key = await (0, util_1.promisify)(crypto_1.scrypt)(password, 'salt', 32);
        }
        catch (err) {
            console.error(err);
        }
    }
    encrypt(text) {
        const cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', this.key, this.iv);
        return Buffer.concat([cipher.update(text), cipher.final()]).toString('base64');
    }
    decrypt(encryptedText) {
        const decipher = (0, crypto_1.createDecipheriv)('aes-256-ctr', this.key, this.iv);
        const encryptedAsBuffer = Buffer.from(encryptedText, 'base64');
        return Buffer.concat([decipher.update(encryptedAsBuffer), decipher.final()]).toString();
    }
    encryptOr(text) {
        if (!(text === null || text === void 0 ? void 0 : text.trim().length)) {
            return;
        }
        else {
            return this.encrypt(text);
        }
    }
};
SecurityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SecurityService);
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map