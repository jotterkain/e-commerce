"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const customers_module_1 = require("./modules/customers/customers.module");
const addresses_module_1 = require("./modules/addresses/addresses.module");
const categories_module_1 = require("./modules/categories/categories.module");
const products_module_1 = require("./modules/products/products.module");
const manufacturers_module_1 = require("./modules/manufacturers/manufacturers.module");
const special_offers_module_1 = require("./modules/special-offers/special-offers.module");
const suppliers_module_1 = require("./modules/suppliers/suppliers.module");
const orders_module_1 = require("./modules/orders/orders.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const cards_module_1 = require("./modules/cards/cards.module");
const security_module_1 = require("./security/security.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            customers_module_1.CustomersModule,
            addresses_module_1.AddressesModule,
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
            manufacturers_module_1.ManufacturersModule,
            special_offers_module_1.SpecialOffersModule,
            suppliers_module_1.SuppliersModule,
            orders_module_1.OrdersModule,
            prisma_module_1.PrismaModule,
            cards_module_1.CardsModule,
            security_module_1.SecurityModule
        ],
        controllers: [],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map