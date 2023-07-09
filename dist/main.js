/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/common/src/decorators/auth-user.decorator.ts":
/*!***********************************************************!*\
  !*** ./libs/common/src/decorators/auth-user.decorator.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.AuthUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return user;
});


/***/ }),

/***/ "./libs/common/src/decorators/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/decorators/index.ts ***!
  \*********************************************/
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
__exportStar(__webpack_require__(/*! ./auth-user.decorator */ "./libs/common/src/decorators/auth-user.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./roles.decorator */ "./libs/common/src/decorators/roles.decorator.ts"), exports);


/***/ }),

/***/ "./libs/common/src/decorators/roles.decorator.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/decorators/roles.decorator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ROLES_KEY = "roles";
const Roles = (...roles) => (0, common_1.SetMetadata)(ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
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
__exportStar(__webpack_require__(/*! ./decorators */ "./libs/common/src/decorators/index.ts"), exports);


/***/ }),

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

/***/ "./libs/core/src/dto/auth/signin.dto.ts":
/*!**********************************************!*\
  !*** ./libs/core/src/dto/auth/signin.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SignInDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], SignInDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 7,
        minSymbols: 1,
        minNumbers: 1,
    }),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
exports.SignInDto = SignInDto;


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
__exportStar(__webpack_require__(/*! ./auth/signin.dto */ "./libs/core/src/dto/auth/signin.dto.ts"), exports);
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QueryOrderDto = void 0;
const enum_1 = __webpack_require__(/*! @eshop/core/enum */ "./libs/core/src/enum/index.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
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
    (0, class_validator_1.IsEnum)(enum_1.OrderStatus),
    __metadata("design:type", typeof (_a = typeof enum_1.OrderStatus !== "undefined" && enum_1.OrderStatus) === "function" ? _a : Object)
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
    (0, class_validator_1.IsDecimal)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", String)
], NewProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], NewProductDto.prototype, "categories", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], NewProductDto.prototype, "hero", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
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
    (0, class_validator_1.IsEmail)(),
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
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], QueryUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], QueryUserDto.prototype, "email", void 0);
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

/***/ "./libs/core/src/enum/index.ts":
/*!*************************************!*\
  !*** ./libs/core/src/enum/index.ts ***!
  \*************************************/
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
__exportStar(__webpack_require__(/*! ./order-status.enum */ "./libs/core/src/enum/order-status.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./role.enum */ "./libs/core/src/enum/role.enum.ts"), exports);


/***/ }),

/***/ "./libs/core/src/enum/order-status.enum.ts":
/*!*************************************************!*\
  !*** ./libs/core/src/enum/order-status.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["ARRIVING"] = "ARRIVING";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));


/***/ }),

/***/ "./libs/core/src/enum/role.enum.ts":
/*!*****************************************!*\
  !*** ./libs/core/src/enum/role.enum.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["CUSTOMER"] = "CUSTOMER";
    Role["EMPLOYEE"] = "EMPLOYEE";
    Role["ADMIN"] = "ADMIN";
})(Role = exports.Role || (exports.Role = {}));


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
__exportStar(__webpack_require__(/*! ./enum */ "./libs/core/src/enum/index.ts"), exports);


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

/***/ "./src/auth/auth.controller.ts":
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const core_1 = __webpack_require__(/*! @eshop/core */ "./libs/core/src/index.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(dto) {
        return this.authService.signUp(dto);
    }
    signin(dto) {
        return this.authService.signIn(dto);
    }
};
__decorate([
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.NewUserDto !== "undefined" && core_1.NewUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)("signin"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.SignInDto !== "undefined" && core_1.SignInDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


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
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const modules_1 = __webpack_require__(/*! src/modules */ "./src/modules/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const notifications_module_1 = __webpack_require__(/*! src/notifications/notifications.module */ "./src/notifications/notifications.module.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            modules_1.UsersModule,
            notifications_module_1.NotificationsModule,
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return {
                        secret: configService.getOrThrow("JWT_SECRET"),
                        signOptions: {
                            expiresIn: configService.getOrThrow("JWT_TOKEN_LIFETIME")
                        }
                    };
                }
            }),
        ],
        providers: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService],
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const users_service_1 = __webpack_require__(/*! src/modules/users/users.service */ "./src/modules/users/users.service.ts");
const notifications_service_1 = __webpack_require__(/*! src/notifications/notifications.service */ "./src/notifications/notifications.service.ts");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let AuthService = class AuthService {
    constructor(usersSerice, jwtService, prismaService, notificationService, configService) {
        this.usersSerice = usersSerice;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.notificationService = notificationService;
        this.configService = configService;
    }
    async signUp(dto) {
        const user = await this.usersSerice.create(dto);
        const payload = { sub: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
    async signIn(dto) {
        if (!dto.email && !dto.password) {
            throw new common_1.BadRequestException("Either email or password is required to sign in");
        }
        if (dto.email && dto.password) {
            throw new common_1.BadRequestException("You have to provide either email or password. Not both");
        }
        let filter = dto.phone ? { phone: dto.phone } : { email: dto.email };
        const user = (await this.usersSerice.getMany(filter))[0];
        if (!user)
            throw new common_1.ForbiddenException(`User with these credentials does not exists`);
        if (!(0, bcrypt_1.compare)(dto.password, user.hash))
            throw new common_1.UnauthorizedException("Incorrect password");
        const payload = { sub: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
    async verifyJwtToken(token) {
        try {
            const { sub } = await this.jwtService.verifyAsync(token, {
                secret: this.configService.getOrThrow("JWT_SECRET")
            });
            return await this.usersSerice.getOne(sub);
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _c : Object, typeof (_d = typeof notifications_service_1.NotificationsService !== "undefined" && notifications_service_1.NotificationsService) === "function" ? _d : Object, typeof (_e = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _e : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/guards/auth.guard.ts":
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
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
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const auth_service_1 = __webpack_require__(/*! src/auth/auth.service */ "./src/auth/auth.service.ts");
let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if ((0, class_validator_1.isEmpty)(token))
            throw new common_1.UnauthorizedException();
        request["user"] = await this.authService.verifyJwtToken(token);
        return !(0, class_validator_1.isEmpty)(request["user"]);
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/guards/index.ts":
/*!*****************************!*\
  !*** ./src/guards/index.ts ***!
  \*****************************/
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
__exportStar(__webpack_require__(/*! ./auth.guard */ "./src/guards/auth.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./role.guard */ "./src/guards/role.guard.ts"), exports);


/***/ }),

/***/ "./src/guards/role.guard.ts":
/*!**********************************!*\
  !*** ./src/guards/role.guard.ts ***!
  \**********************************/
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
exports.RoleGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let RoleGuard = class RoleGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.get("roles", context.getHandler());
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!requiredRoles) {
            return true;
        }
        const ans = requiredRoles.includes(user.role);
        if (!ans)
            throw new common_1.ForbiddenException(`Only allowed to: ${requiredRoles.map(role => role).join(", ")}.`);
        return true;
    }
};
RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RoleGuard);
exports.RoleGuard = RoleGuard;


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
const guards_1 = __webpack_require__(/*! src/guards */ "./src/guards/index.ts");
const common_2 = __webpack_require__(/*! @eshop/common */ "./libs/common/src/index.ts");
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
    (0, common_2.Roles)(core_1.Role.ADMIN),
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
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
var _a, _b, _c;
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
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof core_1.UpdateUserDto !== "undefined" && core_1.UpdateUserDto) === "function" ? _c : Object]),
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
const security_module_1 = __webpack_require__(/*! src/security/security.module */ "./src/security/security.module.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [security_module_1.SecurityModule],
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService]
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! src/prisma/prisma.service */ "./src/prisma/prisma.service.ts");
const security_service_1 = __webpack_require__(/*! src/security/security.service */ "./src/security/security.service.ts");
let UsersService = class UsersService {
    constructor(prismaService, securityService) {
        this.prismaService = prismaService;
        this.securityService = securityService;
    }
    async getOne(id) {
        return await this.prismaService.user.findUnique({ where: { id } });
    }
    async getMany(filter) {
        return await this.prismaService.user.findMany({ where: filter });
    }
    async deleteOne(id) {
        return await this.prismaService.user.delete({ where: { id } });
    }
    async toogleActive(id) {
        return await this.prismaService.user.update({
            where: { id },
            data: {
                active: !(await this.getOne(id)).active
            }
        });
    }
    async create(dto) {
        var _a;
        if (!dto.first_name && !dto.last_name) {
            throw new common_1.BadRequestException("Both first_name and last_name can't be empty");
        }
        if (!dto.first_name || !dto.last_name) {
            dto.first_name = (_a = dto.last_name) !== null && _a !== void 0 ? _a : dto.first_name;
        }
        const hash = await this.securityService.hash(dto.password);
        delete dto.password;
        const username = "";
        return await this.prismaService.user.create({
            data: Object.assign(Object.assign({ username: username }, dto), { hash: hash })
        });
    }
    async update(id, dto) {
        return await this.prismaService.user.update({
            where: { id },
            data: dto
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object, typeof (_b = typeof security_service_1.SecurityService !== "undefined" && security_service_1.SecurityService) === "function" ? _b : Object])
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
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [notifications_service_1.NotificationsService],
        exports: [notifications_service_1.NotificationsService]
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
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
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
            error: error,
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
};
PrismaClientKnownExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.HttpAdapterHost !== "undefined" && core_1.HttpAdapterHost) === "function" ? _a : Object])
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
            error: error,
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
};
PrismaClientValidationExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientValidationError),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.HttpAdapterHost !== "undefined" && core_1.HttpAdapterHost) === "function" ? _b : Object])
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
        const error = 'PrismaClientUnknownRequestError';
        message = defaultMessage;
        statusCode = 500;
        common_1.Logger.error(exception);
        const responseBody = {
            statusCode: statusCode,
            message: message,
            error: error,
        };
        httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }
};
PrismaClientUnknownExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientUnknownRequestError),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.HttpAdapterHost !== "undefined" && core_1.HttpAdapterHost) === "function" ? _c : Object])
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
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule
        ],
        providers: [security_service_1.SecurityService, config_1.ConfigService],
        exports: [security_service_1.SecurityService]
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SecurityService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let SecurityService = class SecurityService {
    constructor(configService) {
        this.configService = configService;
    }
    onModuleInit() {
        this.secret_key = this.configService.getOrThrow("SECRET_KEY");
    }
    encrypt(text) {
    }
    decrypt(cypher) {
    }
    encryptOr(text) {
    }
    async hash(text) {
        const salt = await bcrypt.genSalt();
        return await bcrypt.hash(text, salt);
    }
};
SecurityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
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

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ2pCLENBQUM7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29tbW9uL3NyYy9kZWNvcmF0b3JzL2F1dGgtdXNlci5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29tbW9uL3NyYy9kZWNvcmF0b3JzL2luZGV4LnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvbW1vbi9zcmMvZGVjb3JhdG9ycy9yb2xlcy5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29tbW9uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vYWRkcmVzcy9uZXctYWRkcmVzcy5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2FkZHJlc3MvcXVlcnktYWRkcmVzcy5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2FkZHJlc3MvdXBkYXRlLWFkZHJlc3MuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9hdXRoL3NpZ25pbi5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2NhcmQvbmV3LWNhcmQuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9jYXJkL3F1ZXJ5LWNhcmQuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9jYXRlZ29yeS9jYXRlZ29yeS1wYXJlbnQuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9jYXRlZ29yeS9uZXctY2F0ZWdvcnkuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9jYXRlZ29yeS9xdWVyeS1jYXRlZ29yeS5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2NhdGVnb3J5L3VwZGF0ZS1jYXRlZ29yeS5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL2luZGV4LnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9vcmRlci9uZXctb3JkZXIuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9vcmRlci9vcmRlci1vcHRpb24uZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9vcmRlci9xdWVyeS1vcmRlci5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL29yZGVyL3VwZGF0ZS1vcmRlci5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL3Byb2R1Y3QvbmV3LXByb2R1Y3QuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9wcm9kdWN0L3Byb2R1Y3QtY2F0ZWdvcnkuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by9wcm9kdWN0L3Byb2R1Y3Qtb3B0aW9uLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vcHJvZHVjdC9xdWVyeS1wcm9kdWN0LmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9kdG8vcHJvZHVjdC91cGRhdGUucHJvZHVjdC5kdG8udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZHRvL3VzZXIvbmV3LXVzZXIuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by91c2VyL3F1ZXJ5LXVzZXIuZHRvLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2R0by91c2VyL3VwZGF0ZS11c2VyLmR0by50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vbGlicy9jb3JlL3NyYy9lbnVtL2luZGV4LnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9saWJzL2NvcmUvc3JjL2VudW0vb3JkZXItc3RhdHVzLmVudW0udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvZW51bS9yb2xlLmVudW0udHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL2xpYnMvY29yZS9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9hcHAubW9kdWxlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvYXV0aC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9ndWFyZHMvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL2d1YXJkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL2d1YXJkcy9yb2xlLmd1YXJkLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbG9nZ2VyL2xvZ2dlci5taWRkbGV3YXJlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9hZGRyZXNzZXMvYWRkcmVzc2VzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2FkZHJlc3Nlcy9hZGRyZXNzZXMubW9kdWxlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9hZGRyZXNzZXMvYWRkcmVzc2VzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhcmRzL2NhcmRzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhcmRzL2NhcmRzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvY2FyZHMvY2FyZHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvb3JkZXJzL29yZGVycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9vcmRlcnMvb3JkZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvb3JkZXJzL29yZGVycy5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3Byb2R1Y3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21vZHVsZXMvdXNlcnMvdXNlcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL3ByaXNtYS9wcmlzbWEuZmlsdGVyLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvLi9zcmMvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9zZWN1cml0eS9zZWN1cml0eS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS8uL3NyYy9zZWN1cml0eS9zZWN1cml0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9lY29tbWVlcmNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9qd3RcIiIsIndlYnBhY2s6Ly9lY29tbWVlcmNlL2V4dGVybmFsIGNvbW1vbmpzIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9lY29tbWVlcmNlL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS9leHRlcm5hbCBjb21tb25qcyBcImNsYXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovL2Vjb21tZWVyY2UvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vZWNvbW1lZXJjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lY29tbWVlcmNlLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhlY3V0aW9uQ29udGV4dCwgY3JlYXRlUGFyYW1EZWNvcmF0b3IgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5leHBvcnQgY29uc3QgQXV0aFVzZXIgPSBjcmVhdGVQYXJhbURlY29yYXRvcihcbiAgICAoZGF0YTogdW5rbm93biwgY3R4OiBFeGVjdXRpb25Db250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBjdHguc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpXG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXF1ZXN0LnVzZXJcbiAgICAgICAgcmV0dXJuIHVzZXIgYXMgVXNlclxuICAgIH1cbilcbiIsImV4cG9ydCAqIGZyb20gXCIuL2F1dGgtdXNlci5kZWNvcmF0b3JcIlxuZXhwb3J0ICogZnJvbSBcIi4vcm9sZXMuZGVjb3JhdG9yXCIiLCJpbXBvcnQgeyBSb2xlIH0gZnJvbSAnQGVzaG9wL2NvcmUnO1xuaW1wb3J0IHsgU2V0TWV0YWRhdGEgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmNvbnN0IFJPTEVTX0tFWSA9IFwicm9sZXNcIlxuZXhwb3J0IGNvbnN0IFJvbGVzID0gKC4uLnJvbGVzOiBSb2xlW10pID0+IFNldE1ldGFkYXRhKFJPTEVTX0tFWSwgcm9sZXMpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiIiwiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNTdHJpbmcsIElzVVVJRCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcbmV4cG9ydCBjbGFzcyBOZXdBZGRyZXNzRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBjb3VudHJ5OiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBjaXR5OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICB6aXA6IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHN0cmVldDogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgaG9tZV9jb2RlOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7IElzT3B0aW9uYWwsIElzU3RyaW5nLCBJc1VVSUQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBRdWVyeUFkZHJlc3NEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGNvdW50cnk6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGNpdHk6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHppcDogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgc3RyZWV0OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBob21lX2NvZGU6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1VVSUQoKVxuICB1c2VyX2lkOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7IElzT3B0aW9uYWwsIElzU3RyaW5nLCBJc1VVSUQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVBZGRyZXNzRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBjb3VudHJ5Pzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgY2l0eT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHppcD86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHN0cmVldD86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGhvbWVfY29kZT86IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNFbWFpbCwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNQaG9uZU51bWJlciwgSXNTdHJvbmdQYXNzd29yZCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25JbkR0byB7XG4gICAgQElzT3B0aW9uYWwoKVxuICAgIEBJc1Bob25lTnVtYmVyKClcbiAgICBwaG9uZTogc3RyaW5nXG4gICAgQElzT3B0aW9uYWwoKVxuICAgIEBJc0VtYWlsKClcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgQElzTm90RW1wdHkoKVxuICAgIEBJc1N0cm9uZ1Bhc3N3b3JkKHtcbiAgICAgICAgbWluTGVuZ3RoOiA3LFxuICAgICAgICBtaW5TeW1ib2xzOiAxLFxuICAgICAgICBtaW5OdW1iZXJzOiAxLFxuICAgIH0pXG4gICAgcGFzc3dvcmQ6IHN0cmluZ1xufSIsImltcG9ydCB7XG4gIElzQ3JlZGl0Q2FyZCxcbiAgSXNOb3RFbXB0eSxcbiAgSXNOdW1iZXIsXG4gIElzU3RyaW5nLFxuICBJc1VVSUQsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIE5ld0NhcmREdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU6IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0NyZWRpdENhcmQoKVxuICBudW06IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc051bWJlcigpXG4gIGN2djogbnVtYmVyXG59XG4iLCJpbXBvcnQge1xuICBJc0NyZWRpdENhcmQsXG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgSXNVVUlELFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBRdWVyeUNhcmREdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1VVSUQoKVxuICBvd25lcl9pZDogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc0ludCwgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5UGFyZW50RHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNJbnQoKVxuICBpZDogbnVtYmVyXG59XG4iLCJpbXBvcnQgeyBJc0FycmF5LCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIE5ld0NhdGVnb3J5RHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBuYW1lOiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0FycmF5KClcbiAgcGFyZW50X2lkczogc3RyaW5nW11cbn1cbiIsImltcG9ydCB7IElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDYXRlZ29yeUR0byB7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbmFtZTogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc0FycmF5LCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUNhdGVnb3J5RHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBuYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vYWRkcmVzcy9uZXctYWRkcmVzcy5kdG8nXG5leHBvcnQgKiBmcm9tICcuL2FkZHJlc3MvdXBkYXRlLWFkZHJlc3MuZHRvJ1xuZXhwb3J0ICogZnJvbSBcIi4vYWRkcmVzcy9xdWVyeS1hZGRyZXNzLmR0b1wiXG5cbmV4cG9ydCAqIGZyb20gXCIuL2F1dGgvc2lnbmluLmR0b1wiXG5cbmV4cG9ydCAqIGZyb20gJy4vY2FyZC9uZXctY2FyZC5kdG8nXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJkL3F1ZXJ5LWNhcmQuZHRvXCJcblxuZXhwb3J0ICogZnJvbSAnLi9jYXRlZ29yeS9uZXctY2F0ZWdvcnkuZHRvJ1xuZXhwb3J0ICogZnJvbSAnLi9jYXRlZ29yeS91cGRhdGUtY2F0ZWdvcnkuZHRvJ1xuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkvY2F0ZWdvcnktcGFyZW50LmR0b1wiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXRlZ29yeS9xdWVyeS1jYXRlZ29yeS5kdG9cIlxuXG5leHBvcnQgKiBmcm9tICcuL29yZGVyL25ldy1vcmRlci5kdG8nXG5leHBvcnQgKiBmcm9tICcuL29yZGVyL3VwZGF0ZS1vcmRlci5kdG8nXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlci9xdWVyeS1vcmRlci5kdG9cIlxuZXhwb3J0ICogZnJvbSBcIi4vb3JkZXIvb3JkZXItb3B0aW9uLmR0b1wiXG5cbmV4cG9ydCAqIGZyb20gJy4vcHJvZHVjdC9uZXctcHJvZHVjdC5kdG8nXG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3QvdXBkYXRlLnByb2R1Y3QuZHRvJ1xuZXhwb3J0ICogZnJvbSBcIi4vcHJvZHVjdC9wcm9kdWN0LWNhdGVnb3J5LmR0b1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3Qtb3B0aW9uLmR0b1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9kdWN0L3F1ZXJ5LXByb2R1Y3QuZHRvXCJcblxuZXhwb3J0ICogZnJvbSAnLi91c2VyL25ldy11c2VyLmR0bydcbmV4cG9ydCAqIGZyb20gJy4vdXNlci91cGRhdGUtdXNlci5kdG8nXG5leHBvcnQgKiBmcm9tIFwiLi91c2VyL3F1ZXJ5LXVzZXIuZHRvXCIiLCJpbXBvcnQge1xuICBBcnJheU5vdEVtcHR5LFxuICBJc0FycmF5LFxuICBJc0ludCxcbiAgSXNOb3RFbXB0eSxcbiAgSXNTdHJpbmcsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcbmltcG9ydCB7IE9yZGVySXRlbUR0byB9IGZyb20gJy4vb3JkZXItb3B0aW9uLmR0bydcblxuZXhwb3J0IGNsYXNzIE5ld09yZGVyRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNBcnJheSgpXG4gIEBBcnJheU5vdEVtcHR5KClcbiAgb3JkZXJfaXRlbXM6IE9yZGVySXRlbUR0b1tdXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgY2FyZF9pZDogc3RyaW5nXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgYWRkcmVzc19pZDogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc1N0cmluZywgSXNJbnQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBPcmRlckl0ZW1EdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHByb2R1Y3RfaWQ6IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIHF1YW50aXR5OiBudW1iZXJcbn1cbiIsImltcG9ydCB7IE9yZGVyU3RhdHVzIH0gZnJvbSAnQGVzaG9wL2NvcmUvZW51bSdcbmltcG9ydCB7IElzRGVjaW1hbCwgSXNFbnVtLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5T3JkZXJEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHVzZXJfaWQ/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBjYXJkX2lkPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgYWRkcmVzc19pZD86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oT3JkZXJTdGF0dXMpXG4gIHN0YXR1cz86IE9yZGVyU3RhdHVzXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGVjaW1hbCgpXG4gIHRvdGFsPzogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZU9yZGVyRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBhZGRyZXNzX2lkOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7XG4gIElzQXJyYXksXG4gIElzRGVjaW1hbCxcbiAgSXNOb3RFbXB0eSxcbiAgSXNPcHRpb25hbCxcbiAgSXNQb3NpdGl2ZSxcbiAgSXNTdHJpbmcsXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcidcbmltcG9ydCB7IFByb2R1Y3RPcHRpb25EdG8gfSBmcm9tICcuL3Byb2R1Y3Qtb3B0aW9uLmR0bydcblxuZXhwb3J0IGNsYXNzIE5ld1Byb2R1Y3REdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU6IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRGVjaW1hbCgpXG4gIEBJc1Bvc2l0aXZlKClcbiAgcHJpY2U6IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0FycmF5KClcbiAgY2F0ZWdvcmllczogbnVtYmVyW11cbiAgQElzT3B0aW9uYWwoKVxuICBoZXJvPzogYW55XG4gIEBJc09wdGlvbmFsKClcbiAgaW1hZ2VzOiBhbnlcbiAgQElzTm90RW1wdHkoKVxuICBASXNBcnJheSgpXG4gIG9wdGlvbnM6IFByb2R1Y3RPcHRpb25EdG9bXVxufVxuIiwiaW1wb3J0IHsgSXNJbnQsIElzTm90RW1wdHksIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjQ2F0ZWdvcnlEdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0ludCgpXG4gIGlkOiBudW1iZXJcbn1cbiIsImltcG9ydCB7IElzTm90RW1wdHksIElzU3RyaW5nLCBJc09wdGlvbmFsIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdE9wdGlvbkR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3RyaW5nKClcbiAgb3B0aW9uOiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBsYWJlbDogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBwcmljZTogc3RyaW5nXG59XG4iLCJpbXBvcnQgeyBJc0ludCwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBRdWVyeVByb2R1Y3REdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIG5hbWU/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBwcmljZT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0ludCgpXG4gIGNhdGVnb3J5X25hbWU6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNBcnJheSwgSXNPcHRpb25hbCwgSXNTdHJpbmcgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVQcm9kdWN0RHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBuYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBwcmljZT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGhlcm8/OiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNBcnJheSgpXG4gIGltYWdlcz86IHN0cmluZ1tdXG59XG4iLCJpbXBvcnQge1xuICBJc0VtYWlsLFxuICBJc05vdEVtcHR5LFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgSXNTdHJvbmdQYXNzd29yZCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgTmV3VXNlckR0byB7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgZmlyc3RfbmFtZT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIGxhc3RfbmFtZT86IHN0cmluZ1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIHBob25lOiBzdHJpbmdcbiAgQElzT3B0aW9uYWwoKVxuICBASXNFbWFpbCgpXG4gIGVtYWlsPzogc3RyaW5nXG4gIEBJc05vdEVtcHR5KClcbiAgQElzU3Ryb25nUGFzc3dvcmQoe1xuICAgIG1pbkxlbmd0aDogNyxcbiAgICBtaW5TeW1ib2xzOiAxLFxuICAgIG1pbk51bWJlcnM6IDEsXG4gIH0pXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cbiIsImltcG9ydCB7IElzRW1haWwsIElzT3B0aW9uYWwsIElzUGhvbmVOdW1iZXIsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJ1xuXG5leHBvcnQgY2xhc3MgUXVlcnlVc2VyRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBmaXJzdF9uYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbGFzdF9uYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzUGhvbmVOdW1iZXIoKVxuICBwaG9uZT86IHN0cmluZ1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0VtYWlsKClcbiAgZW1haWw/OnN0cmluZ1xufVxuIiwiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNTdHJpbmcsIElzU3Ryb25nUGFzc3dvcmQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVVc2VyRHRvIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBmaXJzdF9uYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgbGFzdF9uYW1lPzogc3RyaW5nXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3Ryb25nUGFzc3dvcmQoe1xuICAgIG1pbkxlbmd0aDogNyxcbiAgICBtaW5TeW1ib2xzOiAxLFxuICAgIG1pbk51bWJlcnM6IDEsXG4gIH0pXG4gIHBhc3N3b3JkPzogc3RyaW5nXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9vcmRlci1zdGF0dXMuZW51bVwiXG5leHBvcnQgKiBmcm9tIFwiLi9yb2xlLmVudW1cIiIsImV4cG9ydCBlbnVtIE9yZGVyU3RhdHVzIHtcbiAgICBQRU5ESU5HID0gJ1BFTkRJTkcnLFxuICAgIFBST0NFU1NJTkcgPSAnUFJPQ0VTU0lORycsXG4gICAgQVJSSVZJTkcgPSAnQVJSSVZJTkcnLFxuICAgIERFTElWRVJFRCA9ICdERUxJVkVSRUQnLFxuICAgIENBTkNFTExFRCA9ICdDQU5DRUxMRUQnLFxufVxuIiwiZXhwb3J0IGVudW0gUm9sZSB7XG4gICAgQ1VTVE9NRVIgPSBcIkNVU1RPTUVSXCIsXG4gICAgRU1QTE9ZRUUgPSBcIkVNUExPWUVFXCIsXG4gICAgQURNSU4gPSBcIkFETUlOXCJcbn0iLCJleHBvcnQgKiBmcm9tIFwiLi9kdG9cIlxuZXhwb3J0ICogZnJvbSBcIi4vZW51bVwiIiwiaW1wb3J0IHsgTWlkZGxld2FyZUNvbnN1bWVyLCBNb2R1bGUsIE5lc3RNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYU1vZHVsZSB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5tb2R1bGUnXG5pbXBvcnQgeyBTZWN1cml0eU1vZHVsZSB9IGZyb20gJy4vc2VjdXJpdHkvc2VjdXJpdHkubW9kdWxlJ1xuaW1wb3J0IHsgQXV0aE1vZHVsZSB9IGZyb20gJy4vYXV0aC9hdXRoLm1vZHVsZSdcbmltcG9ydCB7IEFkZHJlc3Nlc01vZHVsZSwgQ2FyZHNNb2R1bGUsIENhdGVnb3JpZXNNb2R1bGUsIE9yZGVyc01vZHVsZSwgUHJvZHVjdHNNb2R1bGUsIFVzZXJzTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzJ1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc01vZHVsZSB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dnZXJNaWRkbGV3YXJlIH0gZnJvbSAnLi9sb2dnZXIvbG9nZ2VyLm1pZGRsZXdhcmUnXG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpc21hTW9kdWxlLFxuICAgIFNlY3VyaXR5TW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgTm90aWZpY2F0aW9uc01vZHVsZSxcblxuICAgIEFkZHJlc3Nlc01vZHVsZSxcbiAgICBDYXJkc01vZHVsZSxcbiAgICBDYXRlZ29yaWVzTW9kdWxlLFxuICAgIE9yZGVyc01vZHVsZSxcbiAgICBQcm9kdWN0c01vZHVsZSxcbiAgICBVc2Vyc01vZHVsZSxcbiAgICBOb3RpZmljYXRpb25zTW9kdWxlXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gIGNvbmZpZ3VyZShjb25zdW1lcjogTWlkZGxld2FyZUNvbnN1bWVyKSB7XG4gICAgY29uc3VtZXIuYXBwbHkoTG9nZ2VyTWlkZGxld2FyZSkuZm9yUm91dGVzKFwiKlwiKVxuICB9XG59XG4iLCJpbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBQb3N0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBOZXdVc2VyRHRvLCBTaWduSW5EdG8gfSBmcm9tICdAZXNob3AvY29yZSc7XG5cbkBDb250cm9sbGVyKCdhdXRoJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgICBAUG9zdChcInNpZ251cFwiKVxuICAgIHNpZ251cChAQm9keSgpIGR0bzogTmV3VXNlckR0bykge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5zaWduVXAoZHRvKVxuICAgIH1cblxuICAgIEBQb3N0KFwic2lnbmluXCIpXG4gICAgc2lnbmluKEBCb2R5KCkgZHRvOlNpZ25JbkR0bykge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5zaWduSW4oZHRvKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBKd3RNb2R1bGUsIEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBVc2Vyc01vZHVsZSB9IGZyb20gJ3NyYy9tb2R1bGVzJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNNb2R1bGUgfSBmcm9tICdzcmMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLm1vZHVsZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBVc2Vyc01vZHVsZSxcbiAgICBOb3RpZmljYXRpb25zTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZSxcblxuICAgIEp3dE1vZHVsZS5yZWdpc3RlckFzeW5jKHtcbiAgICAgIGltcG9ydHM6IFtDb25maWdNb2R1bGVdLFxuICAgICAgaW5qZWN0OiBbQ29uZmlnU2VydmljZV0sXG4gICAgICB1c2VGYWN0b3J5OiAoY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNlY3JldDogY29uZmlnU2VydmljZS5nZXRPclRocm93PHN0cmluZz4oXCJKV1RfU0VDUkVUXCIpLFxuICAgICAgICAgIHNpZ25PcHRpb25zOiB7XG4gICAgICAgICAgICBleHBpcmVzSW46IGNvbmZpZ1NlcnZpY2UuZ2V0T3JUaHJvdzxzdHJpbmc+KFwiSldUX1RPS0VOX0xJRkVUSU1FXCIpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gIF0sXG5cbiAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICBjb250cm9sbGVyczogW0F1dGhDb250cm9sbGVyXSxcbiAgZXhwb3J0czogW0F1dGhTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5ld1VzZXJEdG8sIFNpZ25JbkR0byB9IGZyb20gJ0Blc2hvcC9jb3JlJztcbmltcG9ydCB7IEJhZFJlcXVlc3RFeGNlcHRpb24sIEZvcmJpZGRlbkV4Y2VwdGlvbiwgSW5qZWN0YWJsZSwgTm90Rm91bmRFeGNlcHRpb24sIFVuYXV0aG9yaXplZEV4Y2VwdGlvbiB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IEVtcHR5RXJyb3IsIGNhdGNoRXJyb3IsIGZpcnN0LCBmcm9tLCBtYXAsIHN3aXRjaE1hcCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnc3JjL21vZHVsZXMvdXNlcnMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zU2VydmljZSB9IGZyb20gJ3NyYy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlIH0gZnJvbSAnc3JjL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgdXNlcnNTZXJpY2U6IFVzZXJzU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBqd3RTZXJ2aWNlOiBKd3RTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaXNtYVNlcnZpY2U6IFByaXNtYVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgeyB9XG5cbiAgICBhc3luYyBzaWduVXAoZHRvOiBOZXdVc2VyRHRvKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJzU2VyaWNlLmNyZWF0ZShkdG8pXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7IHN1YjogdXNlci5pZCB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IGF3YWl0IHRoaXMuand0U2VydmljZS5zaWduQXN5bmMocGF5bG9hZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNpZ25JbihkdG86IFNpZ25JbkR0bykge1xuICAgICAgICBpZiAoIWR0by5lbWFpbCAmJiAhZHRvLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdEV4Y2VwdGlvbihcIkVpdGhlciBlbWFpbCBvciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBzaWduIGluXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR0by5lbWFpbCAmJiBkdG8ucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCYWRSZXF1ZXN0RXhjZXB0aW9uKFwiWW91IGhhdmUgdG8gcHJvdmlkZSBlaXRoZXIgZW1haWwgb3IgcGFzc3dvcmQuIE5vdCBib3RoXCIpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbHRlciA9IGR0by5waG9uZSA/IHsgcGhvbmU6IGR0by5waG9uZSB9IDogeyBlbWFpbDogZHRvLmVtYWlsIH1cbiAgICAgICAgY29uc3QgdXNlciA9IChhd2FpdCB0aGlzLnVzZXJzU2VyaWNlLmdldE1hbnkoZmlsdGVyKSlbMF1cblxuICAgICAgICBpZiAoIXVzZXIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXhjZXB0aW9uKGBVc2VyIHdpdGggdGhlc2UgY3JlZGVudGlhbHMgZG9lcyBub3QgZXhpc3RzYClcblxuXG4gICAgICAgIGlmICghY29tcGFyZShkdG8ucGFzc3dvcmQsIHVzZXIuaGFzaCkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXhjZXB0aW9uKFwiSW5jb3JyZWN0IHBhc3N3b3JkXCIpO1xuXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7IHN1YjogdXNlci5pZCB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NfdG9rZW46IGF3YWl0IHRoaXMuand0U2VydmljZS5zaWduQXN5bmMocGF5bG9hZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHZlcmlmeUp3dFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3ViIH0gPSBhd2FpdCB0aGlzLmp3dFNlcnZpY2UudmVyaWZ5QXN5bmModG9rZW4sIHtcbiAgICAgICAgICAgICAgICBzZWNyZXQ6IHRoaXMuY29uZmlnU2VydmljZS5nZXRPclRocm93PHN0cmluZz4oXCJKV1RfU0VDUkVUXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudXNlcnNTZXJpY2UuZ2V0T25lKHN1YiBhcyBzdHJpbmcpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXhjZXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgRXhlY3V0aW9uQ29udGV4dCwgSW5qZWN0YWJsZSwgVW5hdXRob3JpemVkRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ3NyYy9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHsgfVxuXG4gIGFzeW5jIGNhbkFjdGl2YXRlKFxuICAgIGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlcXVlc3QgPSBjb250ZXh0LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKVxuICAgIGNvbnN0IHRva2VuID0gdGhpcy5leHRyYWN0VG9rZW5Gcm9tSGVhZGVyKHJlcXVlc3QpXG4gICAgaWYgKGlzRW1wdHkodG9rZW4pKSB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXhjZXB0aW9uKClcbiAgICByZXF1ZXN0W1widXNlclwiXSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudmVyaWZ5Snd0VG9rZW4odG9rZW4pXG4gICAgcmV0dXJuICFpc0VtcHR5KHJlcXVlc3RbXCJ1c2VyXCJdKVxuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0VG9rZW5Gcm9tSGVhZGVyKHJlcXVlc3Q6IFJlcXVlc3QpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IFt0eXBlLCB0b2tlbl0gPSByZXF1ZXN0LmhlYWRlcnMuYXV0aG9yaXphdGlvbj8uc3BsaXQoJyAnKSA/PyBbXTtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ0JlYXJlcicgPyB0b2tlbiA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vYXV0aC5ndWFyZFwiXG5leHBvcnQgKiBmcm9tIFwiLi9yb2xlLmd1YXJkXCIiLCJpbXBvcnQgeyBSb2xlIH0gZnJvbSAnQGVzaG9wL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEV4ZWN1dGlvbkNvbnRleHQsIEZvcmJpZGRlbkV4Y2VwdGlvbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJlZmxlY3RvciB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb2xlR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWZsZWN0b3I6IFJlZmxlY3RvcikgeyB9XG5cbiAgY2FuQWN0aXZhdGUoY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwpOiBib29sZWFuIHwgUHJvbWlzZTxib29sZWFuPiB8IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlcXVpcmVkUm9sZXM6IFJvbGVbXSA9IHRoaXMucmVmbGVjdG9yLmdldDxSb2xlW10+KFwicm9sZXNcIiwgY29udGV4dC5nZXRIYW5kbGVyKCkpXG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdCgpXG4gICAgY29uc3QgdXNlciA9IHJlcXVlc3QudXNlclxuXG4gICAgaWYgKCFyZXF1aXJlZFJvbGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGFucyA9IHJlcXVpcmVkUm9sZXMuaW5jbHVkZXModXNlci5yb2xlIGFzIFJvbGUpXG4gICAgaWYgKCFhbnMpIHRocm93IG5ldyBGb3JiaWRkZW5FeGNlcHRpb24oYE9ubHkgYWxsb3dlZCB0bzogJHtyZXF1aXJlZFJvbGVzLm1hcChyb2xlPT5yb2xlKS5qb2luKFwiLCBcIil9LmApXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTG9nZ2VyLCBOZXN0TWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VyTWlkZGxld2FyZSBpbXBsZW1lbnRzIE5lc3RNaWRkbGV3YXJlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGxvZ2dlciA9IG5ldyBMb2dnZXIoTG9nZ2VyTWlkZGxld2FyZS5uYW1lKTtcblxuICB1c2UocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcbiAgICByZXMub25jZShcImZpbmlzaFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBtc2cgPSBgJHtyZXEuaXB9ICR7cmVxLnVybH0gLSAke3Jlcy5zdGF0dXNDb2RlfSAke3JlcS5oZWFkZXJzW1widXNlci1hZ2VudFwiXX1gXG4gICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPCA0MDApIHRoaXMubG9nZ2VyLnZlcmJvc2UobXNnKTtcbiAgICAgIGVsc2UgaWYgKHJlcy5zdGF0dXNDb2RlIDwgNTAwKSB0aGlzLmxvZ2dlci53YXJuKG1zZyk7XG4gICAgICBlbHNlIHRoaXMubG9nZ2VyLmVycm9yKG1zZyk7XG4gICAgfSlcbiAgICBuZXh0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBQYXJhbSxcbiAgUGFyc2VVVUlEUGlwZSxcbiAgUG9zdCxcbiAgUHV0LFxuICBRdWVyeSxcbiAgVXNlR3VhcmRzLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IEFkZHJlc3Nlc1NlcnZpY2UgfSBmcm9tICcuL2FkZHJlc3Nlcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgTmV3QWRkcmVzc0R0bywgUXVlcnlBZGRyZXNzRHRvLCBSb2xlLCBVcGRhdGVBZGRyZXNzRHRvIH0gZnJvbSAnQGVzaG9wL2NvcmUnXG5pbXBvcnQgeyBBdXRoR3VhcmQsIFJvbGVHdWFyZCB9IGZyb20gJ3NyYy9ndWFyZHMnXG5pbXBvcnQgeyBSb2xlcyB9IGZyb20gJ0Blc2hvcC9jb21tb24nXG5cbkBDb250cm9sbGVyKCdhZGRyZXNzZXMnKVxuZXhwb3J0IGNsYXNzIEFkZHJlc3Nlc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZHJlc3Nlc1NlcnZpY2U6IEFkZHJlc3Nlc1NlcnZpY2UpIHt9XG5cbiAgQEdldCgpXG4gIEBSb2xlcyhSb2xlLkFETUlOKVxuICBAVXNlR3VhcmRzKEF1dGhHdWFyZCxSb2xlR3VhcmQpXG4gIGdldE1hbnkoQFF1ZXJ5KCkgZmlsdGVyOiBRdWVyeUFkZHJlc3NEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5hZGRyZXNzZXNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzU2VydmljZS5nZXRPbmUoaWQpXG4gIH1cblxuICBAUG9zdCgpXG4gIGNyZWF0ZShAQm9keSgpIGR0bzogTmV3QWRkcmVzc0R0bykge1xuICAgIHJldHVybiB0aGlzLmFkZHJlc3Nlc1NlcnZpY2UuY3JlYXRlKGR0bylcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VVVUlEUGlwZSkgaWQ6IHN0cmluZyxcbiAgICBAQm9keSgpIGR0bzogVXBkYXRlQWRkcmVzc0R0byxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzU2VydmljZS51cGRhdGUoaWQsIGR0bylcbiAgfVxuXG4gIEBEZWxldGUoJ2lkJylcbiAgZGVsZXRlT25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkcmVzc2VzU2VydmljZS5kZWxldGVPbmUoaWQpXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQWRkcmVzc2VzU2VydmljZSB9IGZyb20gJy4vYWRkcmVzc2VzLnNlcnZpY2UnXG5pbXBvcnQgeyBBZGRyZXNzZXNDb250cm9sbGVyIH0gZnJvbSAnLi9hZGRyZXNzZXMuY29udHJvbGxlcidcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW0FkZHJlc3Nlc1NlcnZpY2VdLFxuICBjb250cm9sbGVyczogW0FkZHJlc3Nlc0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRyZXNzZXNNb2R1bGUge31cbiIsImltcG9ydCB7IE5ld0FkZHJlc3NEdG8sIFVwZGF0ZUFkZHJlc3NEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRkcmVzc2VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hU2VydmljZTogUHJpc21hU2VydmljZSkgeyB9XG5cbiAgYXN5bmMgZ2V0T25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmFkZHJlc3MuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSlcbiAgfVxuXG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBhbnkpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmFkZHJlc3MuZmluZE1hbnkoeyB3aGVyZTogZmlsdGVyIH0pXG4gIH1cblxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdBZGRyZXNzRHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS5hZGRyZXNzXG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQ6IHN0cmluZywgZHRvOiBVcGRhdGVBZGRyZXNzRHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS5hZGRyZXNzLnVwZGF0ZSh7IHdoZXJlOiB7IGlkIH0sIGRhdGE6IGR0byB9KVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlT25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmFkZHJlc3MuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBEZWxldGUsXG4gIEdldCxcbiAgUGFyYW0sXG4gIFBhcnNlVVVJRFBpcGUsXG4gIFBvc3QsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IENhcmRzU2VydmljZSB9IGZyb20gJy4vY2FyZHMuc2VydmljZSdcbmltcG9ydCB7IE5ld0NhcmREdG8sIFF1ZXJ5Q2FyZER0byB9IGZyb20gJ0Blc2hvcC9jb3JlJ1xuXG5AQ29udHJvbGxlcignY2FyZHMnKVxuZXhwb3J0IGNsYXNzIENhcmRzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FyZHNTZXJ2aWNlOiBDYXJkc1NlcnZpY2UpIHt9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmdldE9uZShpZClcbiAgfVxuXG4gIEBHZXQoKVxuICBnZXRNYW55KEBRdWVyeSgpIGZpbHRlcjogUXVlcnlDYXJkRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG5cbiAgQERlbGV0ZSgnOmlkJylcbiAgZGVsZXRlT25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmRlbGV0ZU9uZShpZClcbiAgfVxuXG4gIEBQb3N0KClcbiAgY3JlYXRlKEBCb2R5KCkgZHRvOiBOZXdDYXJkRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHNTZXJ2aWNlLmNyZWF0ZShkdG8pXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQ2FyZHNTZXJ2aWNlIH0gZnJvbSAnLi9jYXJkcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ2FyZHNDb250cm9sbGVyIH0gZnJvbSAnLi9jYXJkcy5jb250cm9sbGVyJ1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbQ2FyZHNTZXJ2aWNlXSxcbiAgY29udHJvbGxlcnM6IFtDYXJkc0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmV3Q2FyZER0byB9IGZyb20gJ0Blc2hvcC9jb3JlJ1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJ3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaXNtYVNlcnZpY2U6IFByaXNtYVNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgZ2V0T25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmNhcmQuZmluZFVuaXF1ZSh7d2hlcmU6IHtpZH19KVxuICB9XG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBhbnkpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmNhcmQuZmluZE1hbnkoe3doZXJlOiBmaWx0ZXJ9KVxuICB9XG4gIGFzeW5jIGRlbGV0ZU9uZShpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS5jYXJkLmRlbGV0ZSh7d2hlcmU6IHtpZH19KVxuICB9XG4gIGFzeW5jIGNyZWF0ZShkdG86IE5ld0NhcmREdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLmNhcmRcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgR2V0LFxuICBQYXJhbSxcbiAgUGFyc2VJbnRQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IENhdGVnb3JpZXNTZXJ2aWNlIH0gZnJvbSAnLi9jYXRlZ29yaWVzLnNlcnZpY2UnXG5pbXBvcnQgeyBOZXdDYXRlZ29yeUR0bywgUXVlcnlDYXRlZ29yeUR0bywgVXBkYXRlQ2F0ZWdvcnlEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcblxuQENvbnRyb2xsZXIoJ2NhdGVnb3JpZXMnKVxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRlZ29yaWVzU2VydmljZTogQ2F0ZWdvcmllc1NlcnZpY2UpIHt9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzU2VydmljZS5nZXRPbmUoaWQpXG4gIH1cblxuICBAR2V0KClcbiAgZ2V0TWFueShAUXVlcnkoKSBmaWx0ZXI6IFF1ZXJ5Q2F0ZWdvcnlEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzU2VydmljZS5nZXRNYW55KGZpbHRlcilcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIGRlbGV0ZU9uZShAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1NlcnZpY2UuZGVsZXRlT25lKGlkKVxuICB9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGUoQEJvZHkoKSBkdG86IE5ld0NhdGVnb3J5RHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1NlcnZpY2UuY3JlYXRlKGR0bylcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgZHRvOiBVcGRhdGVDYXRlZ29yeUR0byxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1NlcnZpY2UudXBkYXRlKGlkLCBkdG8pXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3JpZXMuc2VydmljZSdcbmltcG9ydCB7IENhdGVnb3JpZXNDb250cm9sbGVyIH0gZnJvbSAnLi9jYXRlZ29yaWVzLmNvbnRyb2xsZXInXG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtDYXRlZ29yaWVzU2VydmljZV0sXG4gIGNvbnRyb2xsZXJzOiBbQ2F0ZWdvcmllc0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZXdDYXRlZ29yeUR0bywgVXBkYXRlQ2F0ZWdvcnlEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaXNtYVNlcnZpY2U6IFByaXNtYVNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgZ2V0T25lKGlkOiBudW1iZXIpIHt9XG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBhbnkpIHt9XG4gIGFzeW5jIGRlbGV0ZU9uZShpZDogbnVtYmVyKSB7fVxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdDYXRlZ29yeUR0bykge31cbiAgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIGR0bzogVXBkYXRlQ2F0ZWdvcnlEdG8pIHt9XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9hZGRyZXNzZXMvYWRkcmVzc2VzLm1vZHVsZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJkcy9jYXJkcy5tb2R1bGVcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1vZHVsZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlcnMvb3JkZXJzLm1vZHVsZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGVcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlcnMvdXNlcnMubW9kdWxlXCIiLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZVVVSURQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL29yZGVycy5zZXJ2aWNlJ1xuaW1wb3J0IHsgTmV3T3JkZXJEdG8sIFF1ZXJ5T3JkZXJEdG8sIFVwZGF0ZU9yZGVyRHRvIH0gZnJvbSAnQGVzaG9wL2NvcmUnXG5cbkBDb250cm9sbGVyKCdvcmRlcnMnKVxuZXhwb3J0IGNsYXNzIE9yZGVyc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZGVyc1NlcnZpY2U6IE9yZGVyc1NlcnZpY2UpIHt9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGUoQEJvZHkoKSBkdG86IE5ld09yZGVyRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJzU2VydmljZS5jcmVhdGUoZHRvKVxuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgdXBkYXRlKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nLCBAQm9keSgpIGR0bzogVXBkYXRlT3JkZXJEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcnNTZXJ2aWNlLnVwZGF0ZShpZCwgZHRvKVxuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJzU2VydmljZS5nZXRPbmUoaWQpXG4gIH1cblxuICBAR2V0KClcbiAgZ2V0TWFueShAUXVlcnkoKSBmaWx0ZXI6IFF1ZXJ5T3JkZXJEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcnNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IE9yZGVyc1NlcnZpY2UgfSBmcm9tICcuL29yZGVycy5zZXJ2aWNlJ1xuaW1wb3J0IHsgT3JkZXJzQ29udHJvbGxlciB9IGZyb20gJy4vb3JkZXJzLmNvbnRyb2xsZXInXG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtPcmRlcnNTZXJ2aWNlXSxcbiAgY29udHJvbGxlcnM6IFtPcmRlcnNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZXdPcmRlckR0bywgVXBkYXRlT3JkZXJEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hU2VydmljZTogUHJpc21hU2VydmljZSkge31cblxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdPcmRlckR0bykge31cblxuICBhc3luYyB1cGRhdGUoaWQ6IHN0cmluZywgZHRvOiBVcGRhdGVPcmRlckR0bykge31cblxuICBhc3luYyBnZXRPbmUoaWQ6IHN0cmluZykge31cblxuICBhc3luYyBnZXRNYW55KGZpbHRlcjogYW55KSB7fVxufVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIFBhcmFtLFxuICBQYXJzZVVVSURQaXBlLFxuICBQb3N0LFxuICBQdXQsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdHMuc2VydmljZSdcbmltcG9ydCB7IE5ld1Byb2R1Y3REdG8sIFF1ZXJ5UHJvZHVjdER0bywgVXBkYXRlUHJvZHVjdER0byB9IGZyb20gJ0Blc2hvcC9jb3JlJ1xuXG5AQ29udHJvbGxlcigncHJvZHVjdHMnKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdHNTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UpIHt9XG5cbiAgQEdldCgpXG4gIGdldE1hbnkoQFF1ZXJ5KCkgZmlsdGVyOiBRdWVyeVByb2R1Y3REdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0TWFueShmaWx0ZXIpXG4gIH1cblxuICBAR2V0KCc6aWQnKVxuICBnZXRPbmUoQFBhcmFtKCdpZCcsIFBhcnNlVVVJRFBpcGUpIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZ2V0T25lKGlkKVxuICB9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGUoQEJvZHkoKSBkdG86IE5ld1Byb2R1Y3REdG8pIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuY3JlYXRlKGR0bylcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VVVUlEUGlwZSkgaWQ6IHN0cmluZyxcbiAgICBAQm9keSgpIGR0bzogVXBkYXRlUHJvZHVjdER0byxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdHNTZXJ2aWNlLnVwZGF0ZShpZCwgZHRvKVxuICB9XG5cbiAgQERlbGV0ZSgnaWQnKVxuICBkZWxldGVPbmUoQFBhcmFtKCdpZCcsIFBhcnNlVVVJRFBpcGUpIGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1NlcnZpY2UuZGVsZXRlT25lKGlkKVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByb2R1Y3RzU2VydmljZSB9IGZyb20gJy4vcHJvZHVjdHMuc2VydmljZSdcbmltcG9ydCB7IFByb2R1Y3RzQ29udHJvbGxlciB9IGZyb20gJy4vcHJvZHVjdHMuY29udHJvbGxlcidcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1Byb2R1Y3RzU2VydmljZV0sXG4gIGNvbnRyb2xsZXJzOiBbUHJvZHVjdHNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNNb2R1bGUge31cbiIsImltcG9ydCB7IE5ld1Byb2R1Y3REdG8sIFVwZGF0ZVByb2R1Y3REdG8gfSBmcm9tICdAZXNob3AvY29yZSdcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbidcbmltcG9ydCB7IFByaXNtYVNlcnZpY2UgfSBmcm9tICdzcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmlzbWFTZXJ2aWNlOiBQcmlzbWFTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIGdldE9uZShpZDogc3RyaW5nKSB7fVxuICBhc3luYyBnZXRNYW55KGZpbHRlcjogYW55KSB7fVxuICBhc3luYyBkZWxldGVPbmUoaWQ6IHN0cmluZykge31cbiAgYXN5bmMgY3JlYXRlKGR0bzogTmV3UHJvZHVjdER0bykge31cbiAgYXN5bmMgdXBkYXRlKGlkOiBzdHJpbmcsIGR0bzogVXBkYXRlUHJvZHVjdER0bykge31cbn1cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBQYXJhbSxcbiAgUGFyc2VVVUlEUGlwZSxcbiAgUG9zdCxcbiAgUHV0LFxuICBRdWVyeSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnXG5pbXBvcnQgeyBRdWVyeVVzZXJEdG8sIFVwZGF0ZVVzZXJEdG8gfSBmcm9tICdAZXNob3AvY29yZSdcblxuQENvbnRyb2xsZXIoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoKVxuICBnZXRNYW55KEBRdWVyeSgpIGZpbHRlcjogUXVlcnlVc2VyRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmdldE1hbnkoZmlsdGVyKVxuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgZ2V0T25lKEBQYXJhbSgnaWQnLCBQYXJzZVVVSURQaXBlKSBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlcnNTZXJ2aWNlLmdldE9uZShpZClcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHVwZGF0ZShAUGFyYW0oJ2lkJywgUGFyc2VVVUlEUGlwZSkgaWQ6IHN0cmluZywgQEJvZHkoKSBkdG86IFVwZGF0ZVVzZXJEdG8pIHtcbiAgICByZXR1cm4gdGhpcy51c2Vyc1NlcnZpY2UudXBkYXRlKGlkLCBkdG8pXG4gIH1cblxuICBARGVsZXRlKCdpZCcpXG4gIGRlbGV0ZU9uZShAUGFyYW0oJ2lkJywgUGFyc2VVVUlEUGlwZSkgaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnVzZXJzU2VydmljZS5kZWxldGVPbmUoaWQpXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJ1xuaW1wb3J0IHsgU2VjdXJpdHlNb2R1bGUgfSBmcm9tICdzcmMvc2VjdXJpdHkvc2VjdXJpdHkubW9kdWxlJ1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1NlY3VyaXR5TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbVXNlcnNTZXJ2aWNlXSxcbiAgY29udHJvbGxlcnM6IFtVc2Vyc0NvbnRyb2xsZXJdLFxuICBleHBvcnRzOiBbVXNlcnNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmV3VXNlckR0bywgUXVlcnlVc2VyRHRvLCBVcGRhdGVVc2VyRHRvIH0gZnJvbSAnQGVzaG9wL2NvcmUnXG5pbXBvcnQgeyBCYWRSZXF1ZXN0RXhjZXB0aW9uLCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlIH0gZnJvbSAnc3JjL3ByaXNtYS9wcmlzbWEuc2VydmljZSdcbmltcG9ydCB7IFNlY3VyaXR5U2VydmljZSB9IGZyb20gJ3NyYy9zZWN1cml0eS9zZWN1cml0eS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcmlzbWFTZXJ2aWNlOiBQcmlzbWFTZXJ2aWNlLCBwcml2YXRlIHNlY3VyaXR5U2VydmljZTogU2VjdXJpdHlTZXJ2aWNlKSB7IH1cblxuICBhc3luYyBnZXRPbmUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYVNlcnZpY2UudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICB9XG4gIGFzeW5jIGdldE1hbnkoZmlsdGVyOiBRdWVyeVVzZXJEdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLnVzZXIuZmluZE1hbnkoeyB3aGVyZTogZmlsdGVyIH0pXG4gIH1cbiAgYXN5bmMgZGVsZXRlT25lKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLnVzZXIuZGVsZXRlKHsgd2hlcmU6IHsgaWQgfSB9KVxuICB9XG5cbiAgYXN5bmMgdG9vZ2xlQWN0aXZlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWFTZXJ2aWNlLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogIShhd2FpdCB0aGlzLmdldE9uZShpZCkpLmFjdGl2ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjcmVhdGUoZHRvOiBOZXdVc2VyRHRvKSB7XG4gICAgaWYgKCFkdG8uZmlyc3RfbmFtZSAmJiAhZHRvLmxhc3RfbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3RFeGNlcHRpb24oXCJCb3RoIGZpcnN0X25hbWUgYW5kIGxhc3RfbmFtZSBjYW4ndCBiZSBlbXB0eVwiKVxuICAgIH1cbiAgICBpZiAoIWR0by5maXJzdF9uYW1lIHx8ICFkdG8ubGFzdF9uYW1lKSB7XG4gICAgICBkdG8uZmlyc3RfbmFtZSA9IGR0by5sYXN0X25hbWUgPz8gZHRvLmZpcnN0X25hbWVcbiAgICB9XG4gICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuc2VjdXJpdHlTZXJ2aWNlLmhhc2goZHRvLnBhc3N3b3JkKVxuICAgIGRlbGV0ZSBkdG8ucGFzc3dvcmRcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gXCJcIlxuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hU2VydmljZS51c2VyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7IHVzZXJuYW1lOiB1c2VybmFtZSwgLi4uZHRvLCBoYXNoOiBoYXNoIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkOiBzdHJpbmcsIGR0bzogVXBkYXRlVXNlckR0bykge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYVNlcnZpY2UudXNlci51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGRhdGE6IGR0b1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW05vdGlmaWNhdGlvbnNTZXJ2aWNlXSxcbiAgZXhwb3J0czogW05vdGlmaWNhdGlvbnNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc1NlcnZpY2Uge31cbiIsImltcG9ydCB7XG4gIEFyZ3VtZW50c0hvc3QsXG4gIENhdGNoLFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIExvZ2dlcixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBIdHRwQXJndW1lbnRzSG9zdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBIdHRwQWRhcHRlckhvc3QgfSBmcm9tICdAbmVzdGpzL2NvcmUnXG5pbXBvcnQgeyBQcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgZGVmYXVsdE1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gdGhlIHNlcnZlcjogZGF0YWJhc2Ugb3BlcmF0aW9uJ1xuXG5AQ2F0Y2goUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yKVxuZXhwb3J0IGNsYXNzIFByaXNtYUNsaWVudEtub3duRXhjZXB0aW9uRmlsdGVyIGltcGxlbWVudHMgRXhjZXB0aW9uRmlsdGVyIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGh0dHBBZGFwdGVySG9zdDogSHR0cEFkYXB0ZXJIb3N0KSB7fVxuXG4gIGNhdGNoKFxuICAgIGV4Y2VwdGlvbjogUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yLFxuICAgIGhvc3Q6IEFyZ3VtZW50c0hvc3QsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHsgaHR0cEFkYXB0ZXIgfSA9IHRoaXMuaHR0cEFkYXB0ZXJIb3N0XG5cbiAgICBjb25zdCBjdHg6IEh0dHBBcmd1bWVudHNIb3N0ID0gaG9zdC5zd2l0Y2hUb0h0dHAoKVxuXG4gICAgbGV0IHN0YXR1c0NvZGU6IG51bWJlclxuICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgICAvLyBjb25zdCBwYXRoOiBzdHJpbmcgPSBodHRwQWRhcHRlci5nZXRSZXF1ZXN0VXJsKGN0eC5nZXRSZXF1ZXN0KCkpIFxuICAgIGNvbnN0IGVycm9yID0gJ1ByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yJ1xuXG4gICAgaWYgKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvcikge1xuICAgICAgc3dpdGNoIChleGNlcHRpb24uY29kZSkge1xuICAgICAgICBjYXNlICdQMTAwOCc6XG4gICAgICAgICAgbWVzc2FnZSA9IGBUaW1lb3V0IDogJHtleGNlcHRpb24ubWV0YS50aW1lfWBcbiAgICAgICAgICBzdGF0dXNDb2RlID0gNDA4XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUDIwMjUnIHx8ICdQMjAxOCc6XG4gICAgICAgICAgbWVzc2FnZSA9IGAke2V4Y2VwdGlvbi5tZXRhLmNhdXNlfWBcbiAgICAgICAgICBzdGF0dXNDb2RlID0gNDA0XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnUDIwMDInOlxuICAgICAgICAgIG1lc3NhZ2UgPSAnVGhlcmUgaXMgYSB1bmlxdWUgY29uc3RyYWludCB2aW9sYXRpb24nXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IDQwOVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1AyMDAzJzpcbiAgICAgICAgICBtZXNzYWdlID0gYG9wZXJhdGlvbiBmYWlsZWQgYmVjYXVzZSBpdCBkZXBlbmRzIG9uIG9uZSBvciBtb3JlIHJlY29yZHMgdGhhdCB3ZXJlIHJlcXVpcmVkIGJ1dCBub3QgZm91bmQ6ICR7ZXhjZXB0aW9uLm1ldGEuY2F1c2V9YFxuICAgICAgICAgIHN0YXR1c0NvZGUgPSA0MDRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdQNTAxMSc6XG4gICAgICAgICAgbWVzc2FnZSA9IGBWYWxpZGF0aW9uIGVycm9yOiBJbnZhbGlkIHR5cGUgcGFzc2VkICR7XG4gICAgICAgICAgICBleGNlcHRpb24ubWV0YS5jYXVzZSA/PyAnJ1xuICAgICAgICAgIH1gXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IDQwMFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ1AyMDIzJzpcbiAgICAgICAgICBtZXNzYWdlID0gYFZhbGlkYXRpb24gZXJyb3I6IEludmFsaWQgdHlwZSBwYXNzZWQgaW4gcmVxdWVzdGBcbiAgICAgICAgICBzdGF0dXNDb2RlID0gNDAwXG4gICAgICAgICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbilcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0TWVzc2FnZVxuICAgICAgICAgIHN0YXR1c0NvZGUgPSA1MDBcbiAgICAgICAgICBMb2dnZXIuZXJyb3IoZXhjZXB0aW9uKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBkZWZhdWx0TWVzc2FnZVxuICAgICAgc3RhdHVzQ29kZSA9IDUwMFxuICAgICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbilcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSB7XG4gICAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9XG5cbiAgICBodHRwQWRhcHRlci5yZXBseShjdHguZ2V0UmVzcG9uc2UoKSwgcmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlKVxuICB9XG59XG5cbkBDYXRjaChQcmlzbWEuUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yKVxuZXhwb3J0IGNsYXNzIFByaXNtYUNsaWVudFZhbGlkYXRpb25FeGNlcHRpb25GaWx0ZXIgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cEFkYXB0ZXJIb3N0OiBIdHRwQWRhcHRlckhvc3QpIHt9XG5cbiAgY2F0Y2goXG4gICAgZXhjZXB0aW9uOiBQcmlzbWEuUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yLFxuICAgIGhvc3Q6IEFyZ3VtZW50c0hvc3QsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHsgaHR0cEFkYXB0ZXIgfSA9IHRoaXMuaHR0cEFkYXB0ZXJIb3N0XG5cbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpXG5cbiAgICBsZXQgc3RhdHVzQ29kZTogbnVtYmVyXG4gICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IGh0dHBBZGFwdGVyLmdldFJlcXVlc3RVcmwoY3R4LmdldFJlcXVlc3QoKSlcbiAgICBjb25zdCBlcnJvciA9ICdQcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3InXG5cbiAgICBpZiAoZXhjZXB0aW9uIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvcikge1xuICAgICAgbWVzc2FnZSA9IGBWYWxpZGF0aW9uIGVycm9yOiBJbnZhbGlkIHR5cGUgcGFzc2VkYFxuICAgICAgc3RhdHVzQ29kZSA9IDQwMFxuICAgICAgTG9nZ2VyLmVycm9yKGV4Y2VwdGlvbi5tZXNzYWdlKVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gZGVmYXVsdE1lc3NhZ2VcbiAgICAgIHN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIExvZ2dlci5lcnJvcihleGNlcHRpb24pXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VCb2R5ID0ge1xuICAgICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgfVxuXG4gICAgaHR0cEFkYXB0ZXIucmVwbHkoY3R4LmdldFJlc3BvbnNlKCksIHJlc3BvbnNlQm9keSwgc3RhdHVzQ29kZSlcbiAgfVxufVxuXG5AQ2F0Y2goUHJpc21hLlByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IpXG5leHBvcnQgY2xhc3MgUHJpc21hQ2xpZW50VW5rbm93bkV4Y2VwdGlvbkZpbHRlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBodHRwQWRhcHRlckhvc3Q6IEh0dHBBZGFwdGVySG9zdCkge31cblxuICBjYXRjaChcbiAgICBleGNlcHRpb246IFByaXNtYS5QcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yLFxuICAgIGhvc3Q6IEFyZ3VtZW50c0hvc3QsXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHsgaHR0cEFkYXB0ZXIgfSA9IHRoaXMuaHR0cEFkYXB0ZXJIb3N0XG5cbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpXG5cbiAgICBsZXQgc3RhdHVzQ29kZTogbnVtYmVyXG4gICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IGh0dHBBZGFwdGVyLmdldFJlcXVlc3RVcmwoY3R4LmdldFJlcXVlc3QoKSlcbiAgICBjb25zdCBlcnJvciA9ICdQcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yJ1xuXG4gICAgbWVzc2FnZSA9IGRlZmF1bHRNZXNzYWdlXG4gICAgc3RhdHVzQ29kZSA9IDUwMFxuICAgIExvZ2dlci5lcnJvcihleGNlcHRpb24pXG5cbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSB7XG4gICAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICB9XG5cbiAgICBodHRwQWRhcHRlci5yZXBseShjdHguZ2V0UmVzcG9uc2UoKSwgcmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hU2VydmljZSB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnXG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZydcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbmZpZ01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlIGV4dGVuZHMgUHJpc21hQ2xpZW50IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcih7XG4gICAgICBkYXRhc291cmNlczoge1xuICAgICAgICBkYjoge1xuICAgICAgICAgIHVybDogY29uZmlnLmdldCgnREFUQUJBU0VfVVJMJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHsgU2VjdXJpdHlTZXJ2aWNlIH0gZnJvbSAnLi9zZWN1cml0eS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnXG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1NlY3VyaXR5U2VydmljZSwgQ29uZmlnU2VydmljZV0sXG4gIGV4cG9ydHM6IFtTZWN1cml0eVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Nb2R1bGVJbml0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWN1cml0eVNlcnZpY2UgaW1wbGVtZW50cyBPbk1vZHVsZUluaXQge1xuXG4gICAgcHJpdmF0ZSBzZWNyZXRfa2V5OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgeyB9XG5cbiAgICBvbk1vZHVsZUluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VjcmV0X2tleSA9IHRoaXMuY29uZmlnU2VydmljZS5nZXRPclRocm93PHN0cmluZz4oXCJTRUNSRVRfS0VZXCIpXG4gICAgfVxuXG4gICAgZW5jcnlwdCh0ZXh0OiBzdHJpbmcpIHtcbiAgICB9XG5cbiAgICBkZWNyeXB0KGN5cGhlcjogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgZW5jcnlwdE9yKHRleHQ/OiBzdHJpbmcpIHtcbiAgICB9XG5cbiAgICBhc3luYyBoYXNoKHRleHQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoKVxuICAgICAgICByZXR1cm4gYXdhaXQgYmNyeXB0Lmhhc2godGV4dCwgc2FsdClcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9qd3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBIdHRwQWRhcHRlckhvc3QsIE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJ1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJ1xuaW1wb3J0IHsgSU5lc3RBcHBsaWNhdGlvbiwgVmFsaWRhdGlvblBpcGUsIExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJ1xuaW1wb3J0IHtcbiAgUHJpc21hQ2xpZW50S25vd25FeGNlcHRpb25GaWx0ZXIsXG4gIFByaXNtYUNsaWVudFVua25vd25FeGNlcHRpb25GaWx0ZXIsXG4gIFByaXNtYUNsaWVudFZhbGlkYXRpb25FeGNlcHRpb25GaWx0ZXIsXG59IGZyb20gJy4vcHJpc21hL3ByaXNtYS5maWx0ZXInXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IE5lc3RFeHByZXNzQXBwbGljYXRpb24gfSBmcm9tICdAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3MnXG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gKGFwcDogSU5lc3RBcHBsaWNhdGlvbikgPT4ge1xuICBjb25zdCBjb25maWdTZXJ2aWNlID0gYXBwLmdldDxDb25maWdTZXJ2aWNlPihDb25maWdTZXJ2aWNlKVxuICBjb25zdCBwb3J0ID0gY29uZmlnU2VydmljZS5nZXRPclRocm93PG51bWJlcj4oJ1BPUlQnKVxuICBmcm9tKGFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKSkuc3Vic2NyaWJlKHtcbiAgICBuZXh0OiAoKSA9PiBMb2dnZXIudmVyYm9zZShgU2VydmVyIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5IG9uIHBvcnQ6ICR7cG9ydH1gKSxcbiAgICBlcnJvcjogKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgTG9nZ2VyLmVycm9yKGVycm9yKVxuICAgICAgcHJvY2Vzcy5leGl0KDEpXG4gICAgfSxcbiAgfSlcbn1cblxuZnJvbShOZXN0RmFjdG9yeS5jcmVhdGU8TmVzdEV4cHJlc3NBcHBsaWNhdGlvbj4oQXBwTW9kdWxlKSkuc3Vic2NyaWJlKHtcbiAgbmV4dDogKGFwcCkgPT4ge1xuICAgIGFwcC5lbmFibGVDb3JzKClcbiAgICBjb25zdCBodHRwQWRhcHRlciA9IGFwcC5nZXQoSHR0cEFkYXB0ZXJIb3N0KVxuICAgIGFwcC5zZXRHbG9iYWxQcmVmaXgoJy9hcGknKVxuICAgIGFwcC51c2VHbG9iYWxQaXBlcyhuZXcgVmFsaWRhdGlvblBpcGUoeyB3aGl0ZWxpc3Q6IHRydWUgfSkpXG4gICAgYXBwLnVzZUdsb2JhbEZpbHRlcnMoXG4gICAgICBuZXcgUHJpc21hQ2xpZW50VW5rbm93bkV4Y2VwdGlvbkZpbHRlcihodHRwQWRhcHRlciksXG4gICAgICBuZXcgUHJpc21hQ2xpZW50S25vd25FeGNlcHRpb25GaWx0ZXIoaHR0cEFkYXB0ZXIpLFxuICAgICAgbmV3IFByaXNtYUNsaWVudFZhbGlkYXRpb25FeGNlcHRpb25GaWx0ZXIoaHR0cEFkYXB0ZXIpLFxuICAgIClcbiAgICBzdGFydFNlcnZlcihhcHApXG4gIH0sXG4gIGVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgTG9nZ2VyLmVycm9yKGVycm9yKVxuICAgIHByb2Nlc3MuZXhpdCgxKVxuICB9LFxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==