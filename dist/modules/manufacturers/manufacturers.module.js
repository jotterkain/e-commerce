"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturersModule = void 0;
const common_1 = require("@nestjs/common");
const manufacturers_service_1 = require("./manufacturers.service");
const manufacturers_controller_1 = require("./manufacturers.controller");
let ManufacturersModule = class ManufacturersModule {
};
ManufacturersModule = __decorate([
    (0, common_1.Module)({
        providers: [manufacturers_service_1.ManufacturersService],
        controllers: [manufacturers_controller_1.ManufacturersController]
    })
], ManufacturersModule);
exports.ManufacturersModule = ManufacturersModule;
//# sourceMappingURL=manufacturers.module.js.map