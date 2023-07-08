/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/core/src/dto/address/new-address.dto.ts":
/*!******************************************************!*\
  !*** ./libs/core/src/dto/address/new-address.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewAddressDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NewAddressDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewAddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewAddressDto.prototype, "zip", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewAddressDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewAddressDto.prototype, "home_code", void 0);
exports.NewAddressDto = NewAddressDto;


/***/ }),

/***/ "./libs/core/src/dto/address/query-address.dto.ts":
/*!********************************************************!*\
  !*** ./libs/core/src/dto/address/query-address.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryAddressDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QueryAddressDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryAddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryAddressDto.prototype, "zip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryAddressDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryAddressDto.prototype, "home_code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], QueryAddressDto.prototype, "user_id", void 0);
exports.QueryAddressDto = QueryAddressDto;


/***/ }),

/***/ "./libs/core/src/dto/address/update-address.dto.ts":
/*!*********************************************************!*\
  !*** ./libs/core/src/dto/address/update-address.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateAddressDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateAddressDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "zip", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAddressDto.prototype, "home_code", void 0);
exports.UpdateAddressDto = UpdateAddressDto;


/***/ }),

/***/ "./libs/core/src/dto/card/new-card.dto.ts":
/*!************************************************!*\
  !*** ./libs/core/src/dto/card/new-card.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewCardDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NewCardDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewCardDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsCreditCard)(),
    __metadata("design:type", String)
], NewCardDto.prototype, "num", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], NewCardDto.prototype, "cvv", void 0);
exports.NewCardDto = NewCardDto;


/***/ }),

/***/ "./libs/core/src/dto/card/query-card.dto.ts":
/*!**************************************************!*\
  !*** ./libs/core/src/dto/card/query-card.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryCardDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QueryCardDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], QueryCardDto.prototype, "owner_id", void 0);
exports.QueryCardDto = QueryCardDto;


/***/ }),

/***/ "./libs/core/src/dto/category/category-parent.dto.ts":
/*!***********************************************************!*\
  !*** ./libs/core/src/dto/category/category-parent.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryParentDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CategoryParentDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CategoryParentDto.prototype, "id", void 0);
exports.CategoryParentDto = CategoryParentDto;


/***/ }),

/***/ "./libs/core/src/dto/category/new-category.dto.ts":
/*!********************************************************!*\
  !*** ./libs/core/src/dto/category/new-category.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewCategoryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NewCategoryDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewCategoryDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NewCategoryDto.prototype, "parent_ids", void 0);
exports.NewCategoryDto = NewCategoryDto;


/***/ }),

/***/ "./libs/core/src/dto/category/query-category.dto.ts":
/*!**********************************************************!*\
  !*** ./libs/core/src/dto/category/query-category.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryCategoryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QueryCategoryDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryCategoryDto.prototype, "name", void 0);
exports.QueryCategoryDto = QueryCategoryDto;


/***/ }),

/***/ "./libs/core/src/dto/category/update-category.dto.ts":
/*!***********************************************************!*\
  !*** ./libs/core/src/dto/category/update-category.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCategoryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateCategoryDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCategoryDto.prototype, "description", void 0);
exports.UpdateCategoryDto = UpdateCategoryDto;


/***/ }),

/***/ "./libs/core/src/dto/index.ts":
/*!************************************!*\
  !*** ./libs/core/src/dto/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./address/new-address.dto */ "./libs/core/src/dto/address/new-address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./address/update-address.dto */ "./libs/core/src/dto/address/update-address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./address/query-address.dto */ "./libs/core/src/dto/address/query-address.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./card/new-card.dto */ "./libs/core/src/dto/card/new-card.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./card/query-card.dto */ "./libs/core/src/dto/card/query-card.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./category/new-category.dto */ "./libs/core/src/dto/category/new-category.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./category/update-category.dto */ "./libs/core/src/dto/category/update-category.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./category/category-parent.dto */ "./libs/core/src/dto/category/category-parent.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./category/query-category.dto */ "./libs/core/src/dto/category/query-category.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./order/new-order.dto */ "./libs/core/src/dto/order/new-order.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./order/update-order.dto */ "./libs/core/src/dto/order/update-order.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./order/query-order.dto */ "./libs/core/src/dto/order/query-order.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./order/order-option.dto */ "./libs/core/src/dto/order/order-option.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/new-product.dto */ "./libs/core/src/dto/product/new-product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/update.product.dto */ "./libs/core/src/dto/product/update.product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/product-category.dto */ "./libs/core/src/dto/product/product-category.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/product-option.dto */ "./libs/core/src/dto/product/product-option.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./product/query-product.dto */ "./libs/core/src/dto/product/query-product.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./user/new-user.dto */ "./libs/core/src/dto/user/new-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./user/update-user.dto */ "./libs/core/src/dto/user/update-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./user/query-user.dto */ "./libs/core/src/dto/user/query-user.dto.ts"), exports);


/***/ }),

/***/ "./libs/core/src/dto/order/new-order.dto.ts":
/*!**************************************************!*\
  !*** ./libs/core/src/dto/order/new-order.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewOrderDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NewOrderDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], NewOrderDto.prototype, "order_items", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewOrderDto.prototype, "card_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewOrderDto.prototype, "address_id", void 0);
exports.NewOrderDto = NewOrderDto;


/***/ }),

/***/ "./libs/core/src/dto/order/order-option.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/core/src/dto/order/order-option.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderItemDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class OrderItemDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemDto.prototype, "product_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], OrderItemDto.prototype, "quantity", void 0);
exports.OrderItemDto = OrderItemDto;


/***/ }),

/***/ "./libs/core/src/dto/order/query-order.dto.ts":
/*!****************************************************!*\
  !*** ./libs/core/src/dto/order/query-order.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryOrderDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["ARRIVING"] = "ARRIVING";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
class QueryOrderDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryOrderDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryOrderDto.prototype, "card_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryOrderDto.prototype, "address_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(OrderStatus),
    __metadata("design:type", String)
], QueryOrderDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", String)
], QueryOrderDto.prototype, "total", void 0);
exports.QueryOrderDto = QueryOrderDto;


/***/ }),

/***/ "./libs/core/src/dto/order/update-order.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/core/src/dto/order/update-order.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateOrderDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "address_id", void 0);
exports.UpdateOrderDto = UpdateOrderDto;


/***/ }),

/***/ "./libs/core/src/dto/product/new-product.dto.ts":
/*!******************************************************!*\
  !*** ./libs/core/src/dto/product/new-product.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewProductDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NewProductDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NewProductDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewProductDto.prototype, "hero", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NewProductDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NewProductDto.prototype, "options", void 0);
exports.NewProductDto = NewProductDto;


/***/ }),

/***/ "./libs/core/src/dto/product/product-category.dto.ts":
/*!***********************************************************!*\
  !*** ./libs/core/src/dto/product/product-category.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProducCategoryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ProducCategoryDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ProducCategoryDto.prototype, "id", void 0);
exports.ProducCategoryDto = ProducCategoryDto;


/***/ }),

/***/ "./libs/core/src/dto/product/product-option.dto.ts":
/*!*********************************************************!*\
  !*** ./libs/core/src/dto/product/product-option.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductOptionDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ProductOptionDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductOptionDto.prototype, "option", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductOptionDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductOptionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductOptionDto.prototype, "price", void 0);
exports.ProductOptionDto = ProductOptionDto;


/***/ }),

/***/ "./libs/core/src/dto/product/query-product.dto.ts":
/*!********************************************************!*\
  !*** ./libs/core/src/dto/product/query-product.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryProductDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QueryProductDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", String)
], QueryProductDto.prototype, "category_name", void 0);
exports.QueryProductDto = QueryProductDto;


/***/ }),

/***/ "./libs/core/src/dto/product/update.product.dto.ts":
/*!*********************************************************!*\
  !*** ./libs/core/src/dto/product/update.product.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateProductDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "hero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "images", void 0);
exports.UpdateProductDto = UpdateProductDto;


/***/ }),

/***/ "./libs/core/src/dto/user/new-user.dto.ts":
/*!************************************************!*\
  !*** ./libs/core/src/dto/user/new-user.dto.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NewUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewUserDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewUserDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], NewUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 7,
        minSymbols: 1,
        minNumbers: 1,
    }),
    __metadata("design:type", String)
], NewUserDto.prototype, "password", void 0);
exports.NewUserDto = NewUserDto;


/***/ }),

/***/ "./libs/core/src/dto/user/query-user.dto.ts":
/*!**************************************************!*\
  !*** ./libs/core/src/dto/user/query-user.dto.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class QueryUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryUserDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryUserDto.prototype, "last_name", void 0);
exports.QueryUserDto = QueryUserDto;


/***/ }),

/***/ "./libs/core/src/dto/user/update-user.dto.ts":
/*!***************************************************!*\
  !*** ./libs/core/src/dto/user/update-user.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 7,
        minSymbols: 1,
        minNumbers: 1,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./libs/core/src/index.ts":
/*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./dto */ "./libs/core/src/dto/index.ts"), exports);


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const security_module_1 = __webpack_require__(/*! ./security/security.module */ "./src/security/security.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const modules_1 = __webpack_require__(/*! ./modules */ "./src/modules/index.ts");
const notifications_module_1 = __webpack_require__(/*! ./notifications/notifications.module */ "./src/notifications/notifications.module.ts");
const logger_middleware_1 = __webpack_require__(/*! ./logger/logger.middleware */ "./src/logger/logger.middleware.ts");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes("*");
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            security_module_1.SecurityModule,
            auth_module_1.AuthModule,
            notifications_module_1.NotificationsModule,
            modules_1.AddressesModule,
            modules_1.CardsModule,
            modules_1.CategoriesModule,
            modules_1.OrdersModule,
            modules_1.ProductsModule,
            modules_1.UsersModule,
            notifications_module_1.NotificationsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuthService = class AuthService {
};
AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/logger/logger.middleware.ts":
/*!*****************************************!*\
  !*** ./src/logger/logger.middleware.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LoggerMiddleware_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerMiddleware = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LoggerMiddleware = LoggerMiddleware_1 = class LoggerMiddleware {
    constructor() {
        this.logger = new common_1.Logger(LoggerMiddleware_1.name);
    }
    use(req, res, next) {
        res.once("finish", () => {
            const msg = `${req.ip} ${req.url} - ${res.statusCode} ${req.headers["user-agent"]}`;
            if (res.statusCode < 400)
                this.logger.verbose(msg);
            else if (res.statusCode < 500)
                this.logger.warn(msg);
            else
                this.logger.error(msg);
        });
        next();
    }
};
LoggerMiddleware = LoggerMiddleware_1 = __decorate([
    (0, common_1.Injectable)()
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;


/***/ }),

/***/ "./src/modules/addresses/addresses.controller.ts":
/*!*******************************************************!*\
  !*** ./src/modules/addresses/addresses.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const addresses_service_1 = __webpack_require__(/*! ./addresses.service */ "./src/modules/addresses/addresses.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let AddressesController = class AddressesController {
    constructor(addressesService) {
        this.addressesService = addressesService;
    }
    getMany(filter) {
        return this.addressesService.getMany(filter);
    }
    getOne(id) {
        return this.addressesService.getOne(id);
    }
    create(dto) {
        return this.addressesService.create(dto);
    }
    update(id, dto) {
        return this.addressesService.update(id, dto);
    }
    deleteOne(id) {
        return this.addressesService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryAddressDto !== "undefined" && core_1.QueryAddressDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "getMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.NewAddressDto !== "undefined" && core_1.NewAddressDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof core_1.UpdateAddressDto !== "undefined" && core_1.UpdateAddressDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AddressesController.prototype, "deleteOne", null);
AddressesController = __decorate([
    (0, common_1.Controller)('addresses'),
    __metadata("design:paramtypes", [typeof (_a = typeof addresses_service_1.AddressesService !== "undefined" && addresses_service_1.AddressesService) === "function" ? _a : Object])
], AddressesController);
exports.AddressesController = AddressesController;


/***/ }),

/***/ "./src/modules/addresses/addresses.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/addresses/addresses.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const addresses_service_1 = __webpack_require__(/*! ./addresses.service */ "./src/modules/addresses/addresses.service.ts");
const addresses_controller_1 = __webpack_require__(/*! ./addresses.controller */ "./src/modules/addresses/addresses.controller.ts");
let AddressesModule = class AddressesModule {
};
AddressesModule = __decorate([
    (0, common_1.Module)({
        providers: [addresses_service_1.AddressesService],
        controllers: [addresses_controller_1.AddressesController],
    })
], AddressesModule);
exports.AddressesModule = AddressesModule;


/***/ }),

/***/ "./src/modules/addresses/addresses.service.ts":
/*!****************************************************!*\
  !*** ./src/modules/addresses/addresses.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddressesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let AddressesService = class AddressesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOne(id) {
        return await this.prismaService.address.findUnique({ where: { id } });
    }
    async getMany(filter) {
        return await this.prismaService.address.findMany({ where: filter });
    }
    async create(dto) {
        return await this.prismaService.address;
    }
    async update(id, dto) {
        return await this.prismaService.address.update({ where: { id }, data: dto });
    }
    async deleteOne(id) {
        return await this.prismaService.address.delete({ where: { id } });
    }
};
AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], AddressesService);
exports.AddressesService = AddressesService;


/***/ }),

/***/ "./src/modules/cards/cards.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/cards/cards.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cards_service_1 = __webpack_require__(/*! ./cards.service */ "./src/modules/cards/cards.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let CardsController = class CardsController {
    constructor(cardsService) {
        this.cardsService = cardsService;
    }
    getOne(id) {
        return this.cardsService.getOne(id);
    }
    getMany(filter) {
        return this.cardsService.getMany(filter);
    }
    deleteOne(id) {
        return this.cardsService.deleteOne(id);
    }
    create(dto) {
        return this.cardsService.create(dto);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryCardDto !== "undefined" && core_1.QueryCardDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "getMany", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.NewCardDto !== "undefined" && core_1.NewCardDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CardsController.prototype, "create", null);
CardsController = __decorate([
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [typeof (_a = typeof cards_service_1.CardsService !== "undefined" && cards_service_1.CardsService) === "function" ? _a : Object])
], CardsController);
exports.CardsController = CardsController;


/***/ }),

/***/ "./src/modules/cards/cards.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/cards/cards.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const cards_service_1 = __webpack_require__(/*! ./cards.service */ "./src/modules/cards/cards.service.ts");
const cards_controller_1 = __webpack_require__(/*! ./cards.controller */ "./src/modules/cards/cards.controller.ts");
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    (0, common_1.Module)({
        providers: [cards_service_1.CardsService],
        controllers: [cards_controller_1.CardsController],
    })
], CardsModule);
exports.CardsModule = CardsModule;


/***/ }),

/***/ "./src/modules/cards/cards.service.ts":
/*!********************************************!*\
  !*** ./src/modules/cards/cards.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let CardsService = class CardsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOne(id) {
        return await this.prismaService.card.findUnique({ where: { id } });
    }
    async getMany(filter) {
        return await this.prismaService.card.findMany({ where: filter });
    }
    async deleteOne(id) {
        return await this.prismaService.card.delete({ where: { id } });
    }
    async create(dto) {
        return await this.prismaService.card;
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], CardsService);
exports.CardsService = CardsService;


/***/ }),

/***/ "./src/modules/categories/categories.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/categories/categories.controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const categories_service_1 = __webpack_require__(/*! ./categories.service */ "./src/modules/categories/categories.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    getOne(id) {
        return this.categoriesService.getOne(id);
    }
    getMany(filter) {
        return this.categoriesService.getMany(filter);
    }
    deleteOne(id) {
        return this.categoriesService.deleteOne(id);
    }
    create(dto) {
        return this.categoriesService.create(dto);
    }
    update(id, dto) {
        return this.categoriesService.update(id, dto);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryCategoryDto !== "undefined" && core_1.QueryCategoryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.NewCategoryDto !== "undefined" && core_1.NewCategoryDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof core_1.UpdateCategoryDto !== "undefined" && core_1.UpdateCategoryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [typeof (_a = typeof categories_service_1.CategoriesService !== "undefined" && categories_service_1.CategoriesService) === "function" ? _a : Object])
], CategoriesController);
exports.CategoriesController = CategoriesController;


/***/ }),

/***/ "./src/modules/categories/categories.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/categories/categories.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const categories_service_1 = __webpack_require__(/*! ./categories.service */ "./src/modules/categories/categories.service.ts");
const categories_controller_1 = __webpack_require__(/*! ./categories.controller */ "./src/modules/categories/categories.controller.ts");
let CategoriesModule = class CategoriesModule {
};
CategoriesModule = __decorate([
    (0, common_1.Module)({
        providers: [categories_service_1.CategoriesService],
        controllers: [categories_controller_1.CategoriesController],
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;


/***/ }),

/***/ "./src/modules/categories/categories.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/categories/categories.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoriesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let CategoriesService = class CategoriesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOne(id) { }
    async getMany(filter) { }
    async deleteOne(id) { }
    async create(dto) { }
    async update(id, dto) { }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], CategoriesService);
exports.CategoriesService = CategoriesService;


/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./addresses/addresses.module */ "./src/modules/addresses/addresses.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./cards/cards.module */ "./src/modules/cards/cards.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./categories/categories.module */ "./src/modules/categories/categories.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./orders/orders.module */ "./src/modules/orders/orders.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./products/products.module */ "./src/modules/products/products.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./users/users.module */ "./src/modules/users/users.module.ts"), exports);


/***/ }),

/***/ "./src/modules/orders/orders.controller.ts":
/*!*************************************************!*\
  !*** ./src/modules/orders/orders.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orders_service_1 = __webpack_require__(/*! ./orders.service */ "./src/modules/orders/orders.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(dto) {
        return this.ordersService.create(dto);
    }
    update(id, dto) {
        return this.ordersService.update(id, dto);
    }
    getOne(id) {
        return this.ordersService.getOne(id);
    }
    getMany(filter) {
        return this.ordersService.getMany(filter);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.NewOrderDto !== "undefined" && core_1.NewOrderDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof core_1.UpdateOrderDto !== "undefined" && core_1.UpdateOrderDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.QueryOrderDto !== "undefined" && core_1.QueryOrderDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getMany", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof orders_service_1.OrdersService !== "undefined" && orders_service_1.OrdersService) === "function" ? _a : Object])
], OrdersController);
exports.OrdersController = OrdersController;


/***/ }),

/***/ "./src/modules/orders/orders.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/orders/orders.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const orders_service_1 = __webpack_require__(/*! ./orders.service */ "./src/modules/orders/orders.service.ts");
const orders_controller_1 = __webpack_require__(/*! ./orders.controller */ "./src/modules/orders/orders.controller.ts");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        providers: [orders_service_1.OrdersService],
        controllers: [orders_controller_1.OrdersController],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;


/***/ }),

/***/ "./src/modules/orders/orders.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/orders/orders.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) { }
    async update(id, dto) { }
    async getOne(id) { }
    async getMany(filter) { }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], OrdersService);
exports.OrdersService = OrdersService;


/***/ }),

/***/ "./src/modules/products/products.controller.ts":
/*!*****************************************************!*\
  !*** ./src/modules/products/products.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./src/modules/products/products.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getMany(filter) {
        return this.productsService.getMany(filter);
    }
    getOne(id) {
        return this.productsService.getOne(id);
    }
    create(dto) {
        return this.productsService.create(dto);
    }
    update(id, dto) {
        return this.productsService.update(id, dto);
    }
    deleteOne(id) {
        return this.productsService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryProductDto !== "undefined" && core_1.QueryProductDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.NewProductDto !== "undefined" && core_1.NewProductDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof core_1.UpdateProductDto !== "undefined" && core_1.UpdateProductDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteOne", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);
exports.ProductsController = ProductsController;


/***/ }),

/***/ "./src/modules/products/products.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/products/products.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const products_service_1 = __webpack_require__(/*! ./products.service */ "./src/modules/products/products.service.ts");
const products_controller_1 = __webpack_require__(/*! ./products.controller */ "./src/modules/products/products.controller.ts");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        providers: [products_service_1.ProductsService],
        controllers: [products_controller_1.ProductsController],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;


/***/ }),

/***/ "./src/modules/products/products.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/products/products.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let ProductsService = class ProductsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOne(id) { }
    async getMany(filter) { }
    async deleteOne(id) { }
    async create(dto) { }
    async update(id, dto) { }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ProductsService);
exports.ProductsService = ProductsService;


/***/ }),

/***/ "./src/modules/users/users.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/users/users.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getMany(filter) {
        return this.usersService.getMany(filter);
    }
    getOne(id) {
        return this.usersService.getOne(id);
    }
    create(dto) {
        return this.usersService.create(dto);
    }
    update(id, dto) {
        return this.usersService.update(id, dto);
    }
    deleteOne(id) {
        return this.usersService.deleteOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryUserDto !== "undefined" && core_1.QueryUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getMany", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.NewUserDto !== "undefined" && core_1.NewUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof core_1.UpdateUserDto !== "undefined" && core_1.UpdateUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteOne", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/modules/users/users.service.ts":
/*!********************************************!*\
  !*** ./src/modules/users/users.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let UsersService = class UsersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getOne(id) { }
    async getMany(filter) { }
    async deleteOne(id) { }
    async create(dto) { }
    async update(id, dto) { }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./src/notifications/notifications.module.ts":
/*!***************************************************!*\
  !*** ./src/notifications/notifications.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const notifications_service_1 = __webpack_require__(/*! ./notifications.service */ "./src/notifications/notifications.service.ts");
let NotificationsModule = class NotificationsModule {
};
NotificationsModule = __decorate([
    (0, common_1.Module)({
        providers: [notifications_service_1.NotificationsService]
    })
], NotificationsModule);
exports.NotificationsModule = NotificationsModule;


/***/ }),

/***/ "./src/notifications/notifications.service.ts":
/*!****************************************************!*\
  !*** ./src/notifications/notifications.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let NotificationsService = class NotificationsService {
};
NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
exports.NotificationsService = NotificationsService;


/***/ }),

/***/ "./src/prisma/prisma.filter.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.filter.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaClientUnknownExceptionFilter = exports.PrismaClientValidationExceptionFilter = exports.PrismaClientKnownExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const defaultMessage = 'Something went wrong on the server: database operation';
let PrismaClientKnownExceptionFilter = class PrismaClientKnownExceptionFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        var _a;
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        let statusCode;
        let message;
        const path = httpAdapter.getRequestUrl(ctx.getRequest());
        const timestamp = new Date().toISOString();
        const error = 'PrismaClientKnownRequestError';
        if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            switch (exception.code) {
                case 'P1008':
                    message = `Timeout : ${exception.meta.time}`;
                    statusCode = 408;
                    break;
                case 'P2025' || 0:
                    message = `${exception.meta.cause}`;
                    statusCode = 404;
                    break;
                case 'P2002':
                    message = 'There is a unique constraint violation';
                    statusCode = 409;
                    break;
                case 'P2003':
                    message = `operation failed because it depends on one or more records that were required but not found: ${exception.meta.cause}`;
                    statusCode = 404;
                    break;
                case 'P5011':
                    message = `Validation error: Invalid type passed ${(_a = exception.meta.cause) !== null && _a !== void 0 ? _a : ''}`;
                    statusCode = 400;
                    break;
                case 'P2023':
                    message = `Validation error: Invalid type passed in request`;
                    statusCode = 400;
                    common_1.Logger.error(exception);
                    break;
                default:
                    message = defaultMessage;
                    statusCode = 500;
                    common_1.Logger.error(exception);
                    break;
            }
        }
        else {
            message = defaultMessage;
            statusCode = 500;
            common_1.Logger.error(exception);
        }
        const responseBody = {
            statusCode: statusCode,
            message: message,
            timestamp: timestamp,
            path: path,
            error: error,
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
};
PrismaClientKnownExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError),
    __metadata("design:paramtypes", [typeof (_a = typeof common_1.HttpAdapterHost !== "undefined" && common_1.HttpAdapterHost) === "function" ? _a : Object])
], PrismaClientKnownExceptionFilter);
exports.PrismaClientKnownExceptionFilter = PrismaClientKnownExceptionFilter;
let PrismaClientValidationExceptionFilter = class PrismaClientValidationExceptionFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        let statusCode;
        let message;
        const path = httpAdapter.getRequestUrl(ctx.getRequest());
        const timestamp = new Date().toISOString();
        const error = 'PrismaClientValidationError';
        if (exception instanceof client_1.Prisma.PrismaClientValidationError) {
            message = `Validation error: Invalid type passed`;
            statusCode = 400;
            common_1.Logger.error(exception.message);
        }
        else {
            message = defaultMessage;
            statusCode = 500;
            common_1.Logger.error(exception);
        }
        const responseBody = {
            statusCode: statusCode,
            message: message,
            timestamp: timestamp,
            path: path,
            error: error,
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
};
PrismaClientValidationExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientValidationError),
    __metadata("design:paramtypes", [typeof (_b = typeof common_1.HttpAdapterHost !== "undefined" && common_1.HttpAdapterHost) === "function" ? _b : Object])
], PrismaClientValidationExceptionFilter);
exports.PrismaClientValidationExceptionFilter = PrismaClientValidationExceptionFilter;
let PrismaClientUnknownExceptionFilter = class PrismaClientUnknownExceptionFilter {
    constructor(httpAdapterHost) {
        this.httpAdapterHost = httpAdapterHost;
    }
    catch(exception, host) {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();
        let statusCode;
        let message;
        const path = httpAdapter.getRequestUrl(ctx.getRequest());
        const timestamp = new Date().toISOString();
        const error = 'PrismaClientUnknownRequestError';
        message = defaultMessage;
        statusCode = 500;
        common_1.Logger.error(exception);
        const responseBody = {
            statusCode: statusCode,
            message: message,
            timestamp: timestamp,
            path: path,
            error: error,
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
};
PrismaClientUnknownExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientUnknownRequestError),
    __metadata("design:paramtypes", [typeof (_c = typeof common_1.HttpAdapterHost !== "undefined" && common_1.HttpAdapterHost) === "function" ? _c : Object])
], PrismaClientUnknownExceptionFilter);
exports.PrismaClientUnknownExceptionFilter = PrismaClientUnknownExceptionFilter;


/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./src/prisma/prisma.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let PrismaModule = class PrismaModule {
};
PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);
exports.PrismaModule = PrismaModule;


/***/ }),

/***/ "./src/prisma/prisma.service.ts":
/*!**************************************!*\
  !*** ./src/prisma/prisma.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor(config) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL'),
                },
            },
        });
        this.config = config;
    }
};
PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),

/***/ "./src/security/security.module.ts":
/*!*****************************************!*\
  !*** ./src/security/security.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecurityModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const security_service_1 = __webpack_require__(/*! ./security.service */ "./src/security/security.service.ts");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    (0, common_1.Module)({
        providers: [security_service_1.SecurityService],
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;


/***/ }),

/***/ "./src/security/security.service.ts":
/*!******************************************!*\
  !*** ./src/security/security.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecurityService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SecurityService = class SecurityService {
};
SecurityService = __decorate([
    (0, common_1.Injectable)()
], SecurityService);
exports.SecurityService = SecurityService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_filter_1 = __webpack_require__(/*! ./prisma/prisma.filter */ "./src/prisma/prisma.filter.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const startServer = (app) => {
    const configService = app.get(config_1.ConfigService);
    const port = configService.getOrThrow('PORT');
    (0, rxjs_1.from)(app.listen(port, '0.0.0.0')).subscribe({
        next: () => common_1.Logger.verbose(`Server started successfully on port: ${port}`),
        error: (error) => {
            common_1.Logger.error(error);
            process.exit(1);
        },
    });
};
(0, rxjs_1.from)(core_1.NestFactory.create(app_module_1.AppModule)).subscribe({
    next: (app) => {
        app.enableCors();
        const httpAdapter = app.get(core_1.HttpAdapterHost);
        app.setGlobalPrefix('/api');
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
        app.useGlobalFilters(new prisma_filter_1.PrismaClientUnknownExceptionFilter(httpAdapter), new prisma_filter_1.PrismaClientKnownExceptionFilter(httpAdapter), new prisma_filter_1.PrismaClientValidationExceptionFilter(httpAdapter));
        startServer(app);
    },
    error: (error) => {
        common_1.Logger.error(error);
        process.exit(1);
    },
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztRQUMzRCxHQUFHLENBQUMsZ0JBQWdCLENBQ2xCLElBQUksa0RBQWtDLENBQUMsV0FBVyxDQUFDLEVBQ25ELElBQUksZ0RBQWdDLENBQUMsV0FBVyxDQUFDLEVBQ2pELElBQUkscURBQXFDLENBQUMsV0FBVyxDQUFDLENBQ3ZEO1FBQ0QsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0QsS0FBSyxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7UUFDdEIsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vYWRkcmVzcy9uZXctYWRkcmVzcy5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2FkZHJlc3MvcXVlcnktYWRkcmVzcy5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2FkZHJlc3MvdXBkYXRlLWFkZHJlc3MuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9jYXJkL25ldy1jYXJkLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vY2FyZC9xdWVyeS1jYXJkLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vY2F0ZWdvcnkvY2F0ZWdvcnktcGFyZW50LmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vY2F0ZWdvcnkvbmV3LWNhdGVnb3J5LmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vY2F0ZWdvcnkvcXVlcnktY2F0ZWdvcnkuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9jYXRlZ29yeS91cGRhdGUtY2F0ZWdvcnkuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9pbmRleC50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vb3JkZXIvbmV3LW9yZGVyLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vb3JkZXIvb3JkZXItb3B0aW9uLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vb3JkZXIvcXVlcnktb3JkZXIuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9vcmRlci91cGRhdGUtb3JkZXIuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9wcm9kdWN0L25ldy1wcm9kdWN0LmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vcHJvZHVjdC9wcm9kdWN0LWNhdGVnb3J5LmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vcHJvZHVjdC9wcm9kdWN0LW9wdGlvbi5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL3Byb2R1Y3QvcXVlcnktcHJvZHVjdC5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL3Byb2R1Y3QvdXBkYXRlLnByb2R1Y3QuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by91c2VyL25ldy11c2VyLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vdXNlci9xdWVyeS11c2VyLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vdXNlci91cGRhdGUtdXNlci5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvYXV0aC9hdXRoLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbG9nZ2VyL2xvZ2dlci5taWRkbGV3YXJlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9hZGRyZXNzZXMvYWRkcmVzc2VzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2FkZHJlc3Nlcy9hZGRyZXNzZXMubW9kdWxlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9hZGRyZXNzZXMvYWRkcmVzc2VzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhcmRzL2NhcmRzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhcmRzL2NhcmRzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvY2FyZHMvY2FyZHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvb3JkZXJzL29yZGVycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9vcmRlcnMvb3JkZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvb3JkZXJzL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL3ByaXNtYS9wcmlzbWEuZmlsdGVyLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9zZWN1cml0eS9zZWN1cml0eS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9zZWN1cml0eS9zZWN1cml0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9lY29tbWVlcmNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9lY29tbWVlcmNlL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS9leHRlcm5hbCBjb21tb25qcyBcInJ4anNcIiIsIndlYnBhY2s6Ly9lY29tbWVlcmNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZywgSXNVVUlEIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuZXhwb3J0IGNsYXNzIE5ld0FkZHJlc3NEdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGNvdW50cnk6IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGNpdHk6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHppcDogc3RyaW5nXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgc3RyZWV0OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBob21lX2NvZGU6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNTdHJpbmcsIElzVVVJRCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5QWRkcmVzc0R0byB7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgY291bnRyeTogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgY2l0eTogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgemlwOiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBzdHJlZXQ6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGhvbWVfY29kZTogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzVVVJRCgpXG4gIHVzZXJfaWQ6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNTdHJpbmcsIElzVVVJRCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUFkZHJlc3NEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGNvdW50cnk/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBjaXR5Pzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgemlwPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgc3RyZWV0Pzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgaG9tZV9jb2RlPzogc3RyaW5nXG59XG4iLCJpbXBvcnQge1xuICBJc0NyZWRpdENhcmQsXG4gIElzTm90RW1wdHksXG4gIElzTnVtYmVyLFxuICBJc1N0cmluZyxcbiAgSXNVVUlELFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBOZXdDYXJkRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBuYW1lOiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNDcmVkaXRDYXJkKClcbiAgbnVtOiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNOdW1iZXIoKVxuICBjdnY6IG51bWJlclxufVxuIiwiaW1wb3J0IHtcbiAgSXNDcmVkaXRDYXJkLFxuICBJc051bWJlcixcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmcsXG4gIElzVVVJRCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDYXJkRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNVVUlEKClcbiAgb3duZXJfaWQ6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNJbnQsIElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVBhcmVudER0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzSW50KClcbiAgaWQ6IG51bWJlclxufVxuIiwiaW1wb3J0IHsgSXNBcnJheSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBOZXdDYXRlZ29yeUR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgbmFtZTogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNBcnJheSgpXG4gIHBhcmVudF9pZHM6IHN0cmluZ1tdXG59XG4iLCJpbXBvcnQgeyBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q2F0ZWdvcnlEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNBcnJheSwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVDYXRlZ29yeUR0byB7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbmFtZT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2FkZHJlc3MvbmV3LWFkZHJlc3MuZHRvJ1xuZXhwb3J0ICogZnJvbSAnLi9hZGRyZXNzL3VwZGF0ZS1hZGRyZXNzLmR0bydcbmV4cG9ydCAqIGZyb20gXCIuL2FkZHJlc3MvcXVlcnktYWRkcmVzcy5kdG9cIlxuXG5leHBvcnQgKiBmcm9tICcuL2NhcmQvbmV3LWNhcmQuZHRvJ1xuZXhwb3J0ICogZnJvbSBcIi4vY2FyZC9xdWVyeS1jYXJkLmR0b1wiXG5cbmV4cG9ydCAqIGZyb20gJy4vY2F0ZWdvcnkvbmV3LWNhdGVnb3J5LmR0bydcbmV4cG9ydCAqIGZyb20gJy4vY2F0ZWdvcnkvdXBkYXRlLWNhdGVnb3J5LmR0bydcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGVnb3J5L2NhdGVnb3J5LXBhcmVudC5kdG9cIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkvcXVlcnktY2F0ZWdvcnkuZHRvXCJcblxuZXhwb3J0ICogZnJvbSAnLi9vcmRlci9uZXctb3JkZXIuZHRvJ1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci91cGRhdGUtb3JkZXIuZHRvJ1xuZXhwb3J0ICogZnJvbSBcIi4vb3JkZXIvcXVlcnktb3JkZXIuZHRvXCJcbmV4cG9ydCAqIGZyb20gXCIuL29yZGVyL29yZGVyLW9wdGlvbi5kdG9cIlxuXG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3QvbmV3LXByb2R1Y3QuZHRvJ1xuZXhwb3J0ICogZnJvbSAnLi9wcm9kdWN0L3VwZGF0ZS5wcm9kdWN0LmR0bydcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2R1Y3QvcHJvZHVjdC1jYXRlZ29yeS5kdG9cIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LW9wdGlvbi5kdG9cIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJvZHVjdC9xdWVyeS1wcm9kdWN0LmR0b1wiXG5cbmV4cG9ydCAqIGZyb20gJy4vdXNlci9uZXctdXNlci5kdG8nXG5leHBvcnQgKiBmcm9tICcuL3VzZXIvdXBkYXRlLXVzZXIuZHRvJ1xuZXhwb3J0ICogZnJvbSBcIi4vdXNlci9xdWVyeS11c2VyLmR0b1wiIiwiaW1wb3J0IHtcbiAgQXJyYXlOb3RFbXB0eSxcbiAgSXNBcnJheSxcbiAgSXNJbnQsXG4gIElzTm90RW1wdHksXG4gIElzU3RyaW5nLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5pbXBvcnQgeyBPcmRlckl0ZW1EdG8gfSBmcm9tICcuL29yZGVyLW9wdGlvbi5kdG8nXG5cbmV4cG9ydCBjbGFzcyBOZXdPcmRlckR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzQXJyYXkoKVxuICBAQXJyYXlOb3RFbXB0eSgpXG4gIG9yZGVyX2l0ZW1zOiBPcmRlckl0ZW1EdG9bXVxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGNhcmRfaWQ6IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGFkZHJlc3NfaWQ6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNTdHJpbmcsIElzSW50IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgT3JkZXJJdGVtRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBwcm9kdWN0X2lkOiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBxdWFudGl0eTogbnVtYmVyXG59XG4iLCJpbXBvcnQgeyBJc0RlY2ltYWwsIElzRW51bSwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmVudW0gT3JkZXJTdGF0dXMge1xuICBQRU5ESU5HID0gJ1BFTkRJTkcnLFxuICBQUk9DRVNTSU5HID0gJ1BST0NFU1NJTkcnLFxuICBBUlJJVklORyA9ICdBUlJJVklORycsXG4gIERFTElWRVJFRCA9ICdERUxJVkVSRUQnLFxuICBDQU5DRUxMRUQgPSAnQ0FOQ0VMTEVEJyxcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5T3JkZXJEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHVzZXJfaWQ6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGNhcmRfaWQ6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGFkZHJlc3NfaWQ6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oT3JkZXJTdGF0dXMpXG4gIHN0YXR1czogT3JkZXJTdGF0dXNcbiAgQElzT3B0aW9uYWwoKVxuICBASXNEZWNpbWFsKClcbiAgdG90YWw6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVPcmRlckR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgYWRkcmVzc19pZDogc3RyaW5nXG59XG4iLCJpbXBvcnQge1xuICBJc0FycmF5LFxuICBJc05vdEVtcHR5LFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgSXNVVUlELFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5pbXBvcnQgeyBQcm9kdWN0T3B0aW9uRHRvIH0gZnJvbSAnLi9wcm9kdWN0LW9wdGlvbi5kdG8nXG5cbmV4cG9ydCBjbGFzcyBOZXdQcm9kdWN0RHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBuYW1lOiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHByaWNlOiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNBcnJheSgpXG4gIGNhdGVnb3JpZXM6IG51bWJlcltdXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgaGVybz86IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0FycmF5KClcbiAgaW1hZ2VzOiBzdHJpbmdbXVxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0FycmF5KClcbiAgb3B0aW9uczogUHJvZHVjdE9wdGlvbkR0b1tdXG59XG4iLCJpbXBvcnQgeyBJc0ludCwgSXNOb3RFbXB0eSwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWNDYXRlZ29yeUR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzSW50KClcbiAgaWQ6IG51bWJlclxufVxuIiwiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNTdHJpbmcsIElzT3B0aW9uYWwgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0T3B0aW9uRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBvcHRpb246IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGxhYmVsOiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHByaWNlOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7IElzSW50LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5UHJvZHVjdER0byB7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbmFtZT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHByaWNlPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzSW50KClcbiAgY2F0ZWdvcnlfbmFtZTogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc0FycmF5LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVByb2R1Y3REdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHByaWNlPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgaGVybz86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0FycmF5KClcbiAgaW1hZ2VzPzogc3RyaW5nW11cbn1cbiIsImltcG9ydCB7XG4gIElzTm90RW1wdHksXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBJc1N0cm9uZ1Bhc3N3b3JkLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBOZXdVc2VyRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBmaXJzdF9uYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbGFzdF9uYW1lPzogc3RyaW5nXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgcGhvbmU6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGVtYWlsPzogc3RyaW5nXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3Ryb25nUGFzc3dvcmQoe1xuICAgIG1pbkxlbmd0aDogNyxcbiAgICBtaW5TeW1ib2xzOiAxLFxuICAgIG1pbk51bWJlcnM6IDEsXG4gIH0pXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7IElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgUXVlcnlVc2VyRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBmaXJzdF9uYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbGFzdF9uYW1lPzogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc09wdGlvbmFsLCBJc1N0cmluZywgSXNTdHJvbmdQYXNzd29yZCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGZpcnN0X25hbWU/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBsYXN0X25hbWU/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJvbmdQYXNzd29yZCh7XG4gICAgbWluTGVuZ3RoOiA3LFxuICAgIG1pblN5bWJvbHM6IDEsXG4gICAgbWluTnVtYmVyczogMSxcbiAgfSlcbiAgcGFzc3dvcmQ/OiBzdHJpbmdcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL2R0b1wiIiwiaW1wb3J0IHsgTWlkZGxld2FyZUNvbnN1bWVyLCBNb2R1bGUsIE5lc3RNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYU1vZHVsZSB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5tb2R1bGUnXG5pbXBvcnQgeyBTZWN1cml0eU1vZHVsZSB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHkubW9kdWxlJ1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aC9hdXRoLm1vZHVsZSdcbmltcG9ydCB7IEFkZHJlc3Nlc01vZHVsZSwgQ2FyZHNNb2R1bGUsIENhdGVnb3JpZXNNb2R1bGUsIE9yZGVyc01vZHVsZSwgUHJvZHVjdHNNb2R1bGUsIFVzZXJzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzJ1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc01vZHVsZSB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dnZXJNaWRkbGV3YXJlIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLm1pZGRsZXdhcmUnXG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpc21hTW9kdWxlLFxuICAgIFNlY3VyaXR5TW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgTm90aWZpY2F0aW9uc01vZHVsZSxcblxuICAgIEFkZHJlc3Nlc01vZHVsZSxcbiAgICBDYXJkc01vZHVsZSxcbiAgICBDYXRlZ29yaWVzTW9kdWxlLFxuICAgIE9yZGVyc01vZHVsZSxcbiAgICBQcm9kdWN0c01vZHVsZSxcbiAgICBVc2Vyc01vZHVsZSxcbiAgICBOb3RpZmljYXRpb25zTW9kdWxlXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gIGNvbmZpZ3VyZShjb25zdW1lcjogTWlkZGxld2FyZUNvbnN1bWVyKSB7XG4gICAgY29uc3VtZXIuYXBwbHkoTG9nZ2VyTWlkZGxld2FyZSkuZm9yUm91dGVzKFwiKlwiKVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnXG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBMb2dnZXIsIE5lc3RNaWRkbGV3YXJlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZXJNaWRkbGV3YXJlIGltcGxlbWVudHMgTmVzdE1pZGRsZXdhcmUge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9nZ2VyID0gbmV3IExvZ2dlcihMb2dnZXJNaWRkbGV3YXJlLm5hbWUpO1xuXG4gIHVzZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIHJlcy5vbmNlKFwiZmluaXNoXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1zZyA9IGAke3JlcS5pcH0gJHtyZXEudXJsfSAtICR7cmVzLnN0YXR1c0NvZGV9ICR7cmVxLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdfWBcbiAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA8IDQwMCkgdGhpcy5sb2dnZXIudmVyYm9zZShtc2cpO1xuICAgICAgZWxzZSBpZiAocmVzLnN0YXR1c0NvZGUgPCA1MDApIHRoaXMubG9nZ2VyLndhcm4obXNnKTtcbiAgICAgIGVsc2UgdGhpcy5sb2dnZXIuZXJyb3IobXNnKTtcbiAgICB9KVxuICAgIG5leHQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZVVVSURQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IEFkZHJlc3Nlc1NlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3Nlcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgTmV3QWRkcmVzc0R0bywgUXVlcnlBZGRyZXNzRHRvLCBVcGRhdGVBZGRyZXNzRHRvIH0gZnJvbSAnQGVzaG9wL2NvcmUnXG5cbkBDb250cm9sbGVyKCdhZGRyZXNzZXMnKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3Nlc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZHJlc3Nlc1NlcnZpY2U6IEFkZHJlc3Nlc1NlcnZpY2UpIHt9XG5cbiAgQEdldCgpXG4gIGdldE1hbnkoQFF1ZXJ5KCkgZmlsdGVyOiBRdWVyeUFkZHJlc3NEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5hZGRyZXNzZXNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzU2VydmljZS5nZXRPbmUoaWQpXG4gIH1cblxuICBAUG9zdCgpXG4gIGNyZWF0ZShAQm9keSgpIGR0bzogTmV3QWRkcmVzc0R0bykge1xuICAgIHJldHVybiB0aGlzLmFkZHJlc3Nlc1NlcnZpY2UuY3JlYXRlKGR0bylcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VVVUlEUGlwZSkgaWQ6IHN0cmluZyxcbiAgICBAQm9keSgpIGR0bzogVXBkYXRlQWRkcmVzc0R0byxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzU2VydmljZS51cGRhdGUoaWQsIGR0bylcbiAgfVxuXG4gIEBEZWxldGUoJ2lkJylcbiAgZGVsZXRlT25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzU2VydmljZS5kZWxldGVPbmUoaWQpXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQWRkcmVzc2VzU2VydmljZSB9IGZyb20gJy4vYWRkcmVzc2VzLnNlcnZpY2UnXG5pbXBvcnQgeyBBZGRyZXNzZXNDb250cm9sbGVyIH0gZnJvbSAnLi9hZGRyZXNzZXMuY29udHJvbGxlcidcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW0FkZHJlc3Nlc1NlcnZpY2VdLFxuICBjb250cm9sbGVyczogW0FkZHJlc3Nlc0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzZXNNb2R1bGUge31cbiIsImltcG9ydCB7IE5ld0FkZHJlc3NEdG8sIFVwZGF0ZUFkZHJlc3NEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc2VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hU2VydmljZTogUHJpc21hU2VydmljZSkgeyB9XG5cbiAgYXN5bmMgZ2V0T25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmFkZHJlc3MuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgfVxuXG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBhbnkpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmFkZHJlc3MuZmluZE1hbnkoeyB3aGVyZTogZmlsdGVyIH0pXG4gIH1cblxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdBZGRyZXNzRHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS5hZGRyZXNzXG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IHN0cmluZywgZHRvOiBVcGRhdGVBZGRyZXNzRHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS5hZGRyZXNzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IGR0byB9KVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlT25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmFkZHJlc3MuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBEZWxldGUsXG4gIEdldCxcbiAgUGFyYW0sXG4gIFBhcnNlVVVJRFBpcGUsXG4gIFBvc3QsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IENhcmRzU2VydmljZSB9IGZyb20gJy4vY2FyZHMuc2VydmljZSdcbmltcG9ydCB7IE5ld0NhcmREdG8sIFF1ZXJ5Q2FyZER0byB9IGZyb20gJ0Blc2hvcC9jb3JlJ1xuXG5AQ29udHJvbGxlcignY2FyZHMnKVxuZXhwb3J0IGNsYXNzIENhcmRzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FyZHNTZXJ2aWNlOiBDYXJkc1NlcnZpY2UpIHt9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmdldE9uZShpZClcbiAgfVxuXG4gIEBHZXQoKVxuICBnZXRNYW55KEBRdWVyeSgpIGZpbHRlcjogUXVlcnlDYXJkRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG5cbiAgQERlbGV0ZSgnOmlkJylcbiAgZGVsZXRlT25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmRlbGV0ZU9uZShpZClcbiAgfVxuXG4gIEBQb3N0KClcbiAgY3JlYXRlKEBCb2R5KCkgZHRvOiBOZXdDYXJkRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmNyZWF0ZShkdG8pXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQ2FyZHNTZXJ2aWNlIH0gZnJvbSAnLi9jYXJkcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ2FyZHNDb250cm9sbGVyIH0gZnJvbSAnLi9jYXJkcy5jb250cm9sbGVyJ1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbQ2FyZHNTZXJ2aWNlXSxcbiAgY29udHJvbGxlcnM6IFtDYXJkc0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmV3Q2FyZER0byB9IGZyb20gJ0Blc2hvcC9jb3JlJ1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJ3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaXNtYVNlcnZpY2U6IFByaXNtYVNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgZ2V0T25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmNhcmQuZmluZFVuaXF1ZSh7d2hlcmU6IHtpZH19KVxuICB9XG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBhbnkpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmNhcmQuZmluZE1hbnkoe3doZXJlOiBmaWx0ZXJ9KVxuICB9XG4gIGFzeW5jIGRlbGV0ZU9uZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS5jYXJkLmRlbGV0ZSh7d2hlcmU6IHtpZH19KVxuICB9XG4gIGFzeW5jIGNyZWF0ZShkdG86IE5ld0NhcmREdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmNhcmRcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgR2V0LFxuICBQYXJhbSxcbiAgUGFyc2VJbnRQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi9jYXRlZ29yaWVzLnNlcnZpY2UnXG5pbXBvcnQgeyBOZXdDYXRlZ29yeUR0bywgUXVlcnlDYXRlZ29yeUR0bywgVXBkYXRlQ2F0ZWdvcnlEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcblxuQENvbnRyb2xsZXIoJ2NhdGVnb3JpZXMnKVxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRlZ29yaWVzU2VydmljZTogQ2F0ZWdvcmllc1NlcnZpY2UpIHt9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzU2VydmljZS5nZXRPbmUoaWQpXG4gIH1cblxuICBAR2V0KClcbiAgZ2V0TWFueShAUXVlcnkoKSBmaWx0ZXI6IFF1ZXJ5Q2F0ZWdvcnlEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzU2VydmljZS5nZXRNYW55KGZpbHRlcilcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIGRlbGV0ZU9uZShAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1NlcnZpY2UuZGVsZXRlT25lKGlkKVxuICB9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGUoQEJvZHkoKSBkdG86IE5ld0NhdGVnb3J5RHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1NlcnZpY2UuY3JlYXRlKGR0bylcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgZHRvOiBVcGRhdGVDYXRlZ29yeUR0byxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1NlcnZpY2UudXBkYXRlKGlkLCBkdG8pXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3JpZXMuc2VydmljZSdcbmltcG9ydCB7IENhdGVnb3JpZXNDb250cm9sbGVyIH0gZnJvbSAnLi9jYXRlZ29yaWVzLmNvbnRyb2xsZXInXG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtDYXRlZ29yaWVzU2VydmljZV0sXG4gIGNvbnRyb2xsZXJzOiBbQ2F0ZWdvcmllc0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZXdDYXRlZ29yeUR0bywgVXBkYXRlQ2F0ZWdvcnlEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaXNtYVNlcnZpY2U6IFByaXNtYVNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgZ2V0T25lKGlkOiBudW1iZXIpIHt9XG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBhbnkpIHt9XG4gIGFzeW5jIGRlbGV0ZU9uZShpZDogbnVtYmVyKSB7fVxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdDYXRlZ29yeUR0bykge31cbiAgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIGR0bzogVXBkYXRlQ2F0ZWdvcnlEdG8pIHt9XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9hZGRyZXNzZXMvYWRkcmVzc2VzLm1vZHVsZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJkcy9jYXJkcy5tb2R1bGVcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlcnMvb3JkZXJzLm1vZHVsZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGVcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlcnMvdXNlcnMubW9kdWxlXCIiLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZVVVSURQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL29yZGVycy5zZXJ2aWNlJ1xuaW1wb3J0IHsgTmV3T3JkZXJEdG8sIFF1ZXJ5T3JkZXJEdG8sIFVwZGF0ZU9yZGVyRHRvIH0gZnJvbSAnQGVzaG9wL2NvcmUnXG5cbkBDb250cm9sbGVyKCdvcmRlcnMnKVxuZXhwb3J0IGNsYXNzIE9yZGVyc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UpIHt9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGUoQEJvZHkoKSBkdG86IE5ld09yZGVyRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJzU2VydmljZS5jcmVhdGUoZHRvKVxuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgdXBkYXRlKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nLCBAQm9keSgpIGR0bzogVXBkYXRlT3JkZXJEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcnNTZXJ2aWNlLnVwZGF0ZShpZCwgZHRvKVxuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJzU2VydmljZS5nZXRPbmUoaWQpXG4gIH1cblxuICBAR2V0KClcbiAgZ2V0TWFueShAUXVlcnkoKSBmaWx0ZXI6IFF1ZXJ5T3JkZXJEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcnNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL29yZGVycy5zZXJ2aWNlJ1xuaW1wb3J0IHsgT3JkZXJzQ29udHJvbGxlciB9IGZyb20gJy4vb3JkZXJzLmNvbnRyb2xsZXInXG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtPcmRlcnNTZXJ2aWNlXSxcbiAgY29udHJvbGxlcnM6IFtPcmRlcnNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZXdPcmRlckR0bywgVXBkYXRlT3JkZXJEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hU2VydmljZTogUHJpc21hU2VydmljZSkge31cblxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdPcmRlckR0bykge31cblxuICBhc3luYyB1cGRhdGUoaWQ6IHN0cmluZywgZHRvOiBVcGRhdGVPcmRlckR0bykge31cblxuICBhc3luYyBnZXRPbmUoaWQ6IHN0cmluZykge31cblxuICBhc3luYyBnZXRNYW55KGZpbHRlcjogYW55KSB7fVxufVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZVVVSURQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdHMuc2VydmljZSdcbmltcG9ydCB7IE5ld1Byb2R1Y3REdG8sIFF1ZXJ5UHJvZHVjdER0bywgVXBkYXRlUHJvZHVjdER0byB9IGZyb20gJ0Blc2hvcC9jb3JlJ1xuXG5AQ29udHJvbGxlcigncHJvZHVjdHMnKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UpIHt9XG5cbiAgQEdldCgpXG4gIGdldE1hbnkoQFF1ZXJ5KCkgZmlsdGVyOiBRdWVyeVByb2R1Y3REdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0TWFueShmaWx0ZXIpXG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBnZXRPbmUoQFBhcmFtKCdpZCcsIFBhcnNlVVVJRFBpcGUpIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0T25lKGlkKVxuICB9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGUoQEJvZHkoKSBkdG86IE5ld1Byb2R1Y3REdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuY3JlYXRlKGR0bylcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VVVUlEUGlwZSkgaWQ6IHN0cmluZyxcbiAgICBAQm9keSgpIGR0bzogVXBkYXRlUHJvZHVjdER0byxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHNTZXJ2aWNlLnVwZGF0ZShpZCwgZHRvKVxuICB9XG5cbiAgQERlbGV0ZSgnaWQnKVxuICBkZWxldGVPbmUoQFBhcmFtKCdpZCcsIFBhcnNlVVVJRFBpcGUpIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZGVsZXRlT25lKGlkKVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdHMuc2VydmljZSdcbmltcG9ydCB7IFByb2R1Y3RzQ29udHJvbGxlciB9IGZyb20gJy4vcHJvZHVjdHMuY29udHJvbGxlcidcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1Byb2R1Y3RzU2VydmljZV0sXG4gIGNvbnRyb2xsZXJzOiBbUHJvZHVjdHNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNNb2R1bGUge31cbiIsImltcG9ydCB7IE5ld1Byb2R1Y3REdG8sIFVwZGF0ZVByb2R1Y3REdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmlzbWFTZXJ2aWNlOiBQcmlzbWFTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGdldE9uZShpZDogc3RyaW5nKSB7fVxuICBhc3luYyBnZXRNYW55KGZpbHRlcjogYW55KSB7fVxuICBhc3luYyBkZWxldGVPbmUoaWQ6IHN0cmluZykge31cbiAgYXN5bmMgY3JlYXRlKGR0bzogTmV3UHJvZHVjdER0bykge31cbiAgYXN5bmMgdXBkYXRlKGlkOiBzdHJpbmcsIGR0bzogVXBkYXRlUHJvZHVjdER0bykge31cbn1cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBQYXJhbSxcbiAgUGFyc2VVVUlEUGlwZSxcbiAgUG9zdCxcbiAgUHV0LFxuICBRdWVyeSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnXG5pbXBvcnQgeyBOZXdVc2VyRHRvLCBRdWVyeVVzZXJEdG8sIFVwZGF0ZVVzZXJEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcblxuQENvbnRyb2xsZXIoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoKVxuICBnZXRNYW55KEBRdWVyeSgpIGZpbHRlcjogUXVlcnlVc2VyRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmdldE9uZShpZClcbiAgfVxuXG4gIEBQb3N0KClcbiAgY3JlYXRlKEBCb2R5KCkgZHRvOiBOZXdVc2VyRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmNyZWF0ZShkdG8pXG4gIH1cblxuICBAUHV0KCc6aWQnKVxuICB1cGRhdGUoQFBhcmFtKCdpZCcsIFBhcnNlVVVJRFBpcGUpIGlkOiBzdHJpbmcsIEBCb2R5KCkgZHRvOiBVcGRhdGVVc2VyRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLnVwZGF0ZShpZCwgZHRvKVxuICB9XG5cbiAgQERlbGV0ZSgnaWQnKVxuICBkZWxldGVPbmUoQFBhcmFtKCdpZCcsIFBhcnNlVVVJRFBpcGUpIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UuZGVsZXRlT25lKGlkKVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSdcbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vdXNlcnMuY29udHJvbGxlcidcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1VzZXJzU2VydmljZV0sXG4gIGNvbnRyb2xsZXJzOiBbVXNlcnNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUge31cbiIsImltcG9ydCB7IE5ld1VzZXJEdG8sIFVwZGF0ZVVzZXJEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmlzbWFTZXJ2aWNlOiBQcmlzbWFTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGdldE9uZShpZDogc3RyaW5nKSB7fVxuICBhc3luYyBnZXRNYW55KGZpbHRlcjogYW55KSB7fVxuICBhc3luYyBkZWxldGVPbmUoaWQ6IHN0cmluZykge31cbiAgYXN5bmMgY3JlYXRlKGR0bzogTmV3VXNlckR0bykge31cbiAgYXN5bmMgdXBkYXRlKGlkOiBzdHJpbmcsIGR0bzogVXBkYXRlVXNlckR0bykge31cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbTm90aWZpY2F0aW9uc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zU2VydmljZSB7fVxuIiwiaW1wb3J0IHtcbiAgQXJndW1lbnRzSG9zdCxcbiAgQ2F0Y2gsXG4gIEV4Y2VwdGlvbkZpbHRlcixcbiAgSHR0cEFkYXB0ZXJIb3N0LFxuICBMb2dnZXIsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IGRlZmF1bHRNZXNzYWdlID0gJ1NvbWV0aGluZyB3ZW50IHdyb25nIG9uIHRoZSBzZXJ2ZXI6IGRhdGFiYXNlIG9wZXJhdGlvbidcblxuQENhdGNoKFByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvcilcbmV4cG9ydCBjbGFzcyBQcmlzbWFDbGllbnRLbm93bkV4Y2VwdGlvbkZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cEFkYXB0ZXJIb3N0OiBIdHRwQWRhcHRlckhvc3QpIHt9XG5cbiAgY2F0Y2goXG4gICAgZXhjZXB0aW9uOiBQcmlzbWEuUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IsXG4gICAgaG9zdDogQXJndW1lbnRzSG9zdCxcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgeyBodHRwQWRhcHRlciB9ID0gdGhpcy5odHRwQWRhcHRlckhvc3RcblxuICAgIGNvbnN0IGN0eCA9IGhvc3Quc3dpdGNoVG9IdHRwKClcblxuICAgIGxldCBzdGF0dXNDb2RlOiBudW1iZXJcbiAgICBsZXQgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gICAgY29uc3QgcGF0aDogc3RyaW5nID0gaHR0cEFkYXB0ZXIuZ2V0UmVxdWVzdFVybChjdHguZ2V0UmVxdWVzdCgpKVxuICAgIGNvbnN0IHRpbWVzdGFtcDogc3RyaW5nID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgY29uc3QgZXJyb3IgPSAnUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3InXG4gICAgaWYgKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvcikge1xuICAgICAgc3dpdGNoIChleGNlcHRpb24uY29kZSkge1xuICAgICAgICBjYXNlICdQMTAwOCc6XG4gICAgICAgICAgbWVzc2FnZSA9IGBUaW1lb3V0IDogJHtleGNlcHRpb24ubWV0YS50aW1lfWBcbiAgICAgICAgICBzdGF0dXNDb2RlID0gNDA4XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUDIwMjUnIHx8ICdQMjAxOCc6XG4gICAgICAgICAgbWVzc2FnZSA9IGAke2V4Y2VwdGlvbi5tZXRhLmNhdXNlfWBcbiAgICAgICAgICBzdGF0dXNDb2RlID0gNDA0XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUDIwMDInOlxuICAgICAgICAgIG1lc3NhZ2UgPSAnVGhlcmUgaXMgYSB1bmlxdWUgY29uc3RyYWludCB2aW9sYXRpb24nXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IDQwOVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1AyMDAzJzpcbiAgICAgICAgICBtZXNzYWdlID0gYG9wZXJhdGlvbiBmYWlsZWQgYmVjYXVzZSBpdCBkZXBlbmRzIG9uIG9uZSBvciBtb3JlIHJlY29yZHMgdGhhdCB3ZXJlIHJlcXVpcmVkIGJ1dCBub3QgZm91bmQ6ICR7ZXhjZXB0aW9uLm1ldGEuY2F1c2V9YFxuICAgICAgICAgIHN0YXR1c0NvZGUgPSA0MDRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdQNTAxMSc6XG4gICAgICAgICAgbWVzc2FnZSA9IGBWYWxpZGF0aW9uIGVycm9yOiBJbnZhbGlkIHR5cGUgcGFzc2VkICR7XG4gICAgICAgICAgICBleGNlcHRpb24ubWV0YS5jYXVzZSA/PyAnJ1xuICAgICAgICAgIH1gXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IDQwMFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1AyMDIzJzpcbiAgICAgICAgICBtZXNzYWdlID0gYFZhbGlkYXRpb24gZXJyb3I6IEludmFsaWQgdHlwZSBwYXNzZWQgaW4gcmVxdWVzdGBcbiAgICAgICAgICBzdGF0dXNDb2RlID0gNDAwXG4gICAgICAgICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbilcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0TWVzc2FnZVxuICAgICAgICAgIHN0YXR1c0NvZGUgPSA1MDBcbiAgICAgICAgICBMb2dnZXIuZXJyb3IoZXhjZXB0aW9uKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0TWVzc2FnZVxuICAgICAgc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbilcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSB7XG4gICAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9XG5cbiAgICBodHRwQWRhcHRlci5yZXBseShjdHguZ2V0UmVzcG9uc2UoKSwgcmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlKVxuICB9XG59XG5cbkBDYXRjaChQcmlzbWEuUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yKVxuZXhwb3J0IGNsYXNzIFByaXNtYUNsaWVudFZhbGlkYXRpb25FeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGh0dHBBZGFwdGVySG9zdDogSHR0cEFkYXB0ZXJIb3N0KSB7fVxuXG4gIGNhdGNoKFxuICAgIGV4Y2VwdGlvbjogUHJpc21hLlByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvcixcbiAgICBob3N0OiBBcmd1bWVudHNIb3N0LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB7IGh0dHBBZGFwdGVyIH0gPSB0aGlzLmh0dHBBZGFwdGVySG9zdFxuXG4gICAgY29uc3QgY3R4ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKVxuXG4gICAgbGV0IHN0YXR1c0NvZGU6IG51bWJlclxuICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSBodHRwQWRhcHRlci5nZXRSZXF1ZXN0VXJsKGN0eC5nZXRSZXF1ZXN0KCkpXG4gICAgY29uc3QgdGltZXN0YW1wOiBzdHJpbmcgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICBjb25zdCBlcnJvciA9ICdQcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3InXG5cbiAgICBpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvcikge1xuICAgICAgbWVzc2FnZSA9IGBWYWxpZGF0aW9uIGVycm9yOiBJbnZhbGlkIHR5cGUgcGFzc2VkYFxuICAgICAgc3RhdHVzQ29kZSA9IDQwMFxuICAgICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbi5tZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gZGVmYXVsdE1lc3NhZ2VcbiAgICAgIHN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIExvZ2dlci5lcnJvcihleGNlcHRpb24pXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VCb2R5ID0ge1xuICAgICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgfVxuXG4gICAgaHR0cEFkYXB0ZXIucmVwbHkoY3R4LmdldFJlc3BvbnNlKCksIHJlc3BvbnNlQm9keSwgc3RhdHVzQ29kZSlcbiAgfVxufVxuXG5AQ2F0Y2goUHJpc21hLlByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IpXG5leHBvcnQgY2xhc3MgUHJpc21hQ2xpZW50VW5rbm93bkV4Y2VwdGlvbkZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cEFkYXB0ZXJIb3N0OiBIdHRwQWRhcHRlckhvc3QpIHt9XG5cbiAgY2F0Y2goXG4gICAgZXhjZXB0aW9uOiBQcmlzbWEuUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvcixcbiAgICBob3N0OiBBcmd1bWVudHNIb3N0LFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB7IGh0dHBBZGFwdGVyIH0gPSB0aGlzLmh0dHBBZGFwdGVySG9zdFxuXG4gICAgY29uc3QgY3R4ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKVxuXG4gICAgbGV0IHN0YXR1c0NvZGU6IG51bWJlclxuICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSBodHRwQWRhcHRlci5nZXRSZXF1ZXN0VXJsKGN0eC5nZXRSZXF1ZXN0KCkpXG4gICAgY29uc3QgdGltZXN0YW1wOiBzdHJpbmcgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICBjb25zdCBlcnJvciA9ICdQcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yJ1xuXG4gICAgbWVzc2FnZSA9IGRlZmF1bHRNZXNzYWdlXG4gICAgc3RhdHVzQ29kZSA9IDUwMFxuICAgIExvZ2dlci5lcnJvcihleGNlcHRpb24pXG5cbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSB7XG4gICAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9XG5cbiAgICBodHRwQWRhcHRlci5yZXBseShjdHguZ2V0UmVzcG9uc2UoKSwgcmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnXG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZydcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbmZpZ01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlIGV4dGVuZHMgUHJpc21hQ2xpZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcih7XG4gICAgICBkYXRhc291cmNlczoge1xuICAgICAgICBkYjoge1xuICAgICAgICAgIHVybDogY29uZmlnLmdldCgnREFUQUJBU0VfVVJMJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgU2VjdXJpdHlTZXJ2aWNlIH0gZnJvbSAnLi9zZWN1cml0eS5zZXJ2aWNlJ1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbU2VjdXJpdHlTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5U2VydmljZSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBIdHRwQWRhcHRlckhvc3QsIE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJ1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJ1xuaW1wb3J0IHsgSU5lc3RBcHBsaWNhdGlvbiwgVmFsaWRhdGlvblBpcGUsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHtcbiAgUHJpc21hQ2xpZW50S25vd25FeGNlcHRpb25GaWx0ZXIsXG4gIFByaXNtYUNsaWVudFVua25vd25FeGNlcHRpb25GaWx0ZXIsXG4gIFByaXNtYUNsaWVudFZhbGlkYXRpb25FeGNlcHRpb25GaWx0ZXIsXG59IGZyb20gJy4vcHJpc21hL3ByaXNtYS5maWx0ZXInXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IE5lc3RFeHByZXNzQXBwbGljYXRpb24gfSBmcm9tICdAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3MnXG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gKGFwcDogSU5lc3RBcHBsaWNhdGlvbikgPT4ge1xuICBjb25zdCBjb25maWdTZXJ2aWNlID0gYXBwLmdldDxDb25maWdTZXJ2aWNlPihDb25maWdTZXJ2aWNlKVxuICBjb25zdCBwb3J0ID0gY29uZmlnU2VydmljZS5nZXRPclRocm93PG51bWJlcj4oJ1BPUlQnKVxuICBmcm9tKGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKSkuc3Vic2NyaWJlKHtcbiAgICBuZXh0OiAoKSA9PiBMb2dnZXIudmVyYm9zZShgU2VydmVyIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5IG9uIHBvcnQ6ICR7cG9ydH1gKSxcbiAgICBlcnJvcjogKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGVycm9yKVxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfSxcbiAgfSlcbn1cblxuZnJvbShOZXN0RmFjdG9yeS5jcmVhdGU8TmVzdEV4cHJlc3NBcHBsaWNhdGlvbj4oQXBwTW9kdWxlKSkuc3Vic2NyaWJlKHtcbiAgbmV4dDogKGFwcCkgPT4ge1xuICAgIGFwcC5lbmFibGVDb3JzKClcbiAgICBjb25zdCBodHRwQWRhcHRlciA9IGFwcC5nZXQoSHR0cEFkYXB0ZXJIb3N0KVxuICAgIGFwcC5zZXRHbG9iYWxQcmVmaXgoJy9hcGknKVxuICAgIGFwcC51c2VHbG9iYWxQaXBlcyhuZXcgVmFsaWRhdGlvblBpcGUoeyB3aGl0ZWxpc3Q6IHRydWUgfSkpXG4gICAgYXBwLnVzZUdsb2JhbEZpbHRlcnMoXG4gICAgICBuZXcgUHJpc21hQ2xpZW50VW5rbm93bkV4Y2VwdGlvbkZpbHRlcihodHRwQWRhcHRlciksXG4gICAgICBuZXcgUHJpc21hQ2xpZW50S25vd25FeGNlcHRpb25GaWx0ZXIoaHR0cEFkYXB0ZXIpLFxuICAgICAgbmV3IFByaXNtYUNsaWVudFZhbGlkYXRpb25FeGNlcHRpb25GaWx0ZXIoaHR0cEFkYXB0ZXIpLFxuICAgIClcbiAgICBzdGFydFNlcnZlcihhcHApXG4gIH0sXG4gIGVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgTG9nZ2VyLmVycm9yKGVycm9yKVxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9LFxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==