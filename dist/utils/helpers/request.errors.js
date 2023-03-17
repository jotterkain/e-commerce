"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestErrorThrow = void 0;
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
function requestErrorThrow(error) {
    if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
            case 'P1008':
                throw new common_1.RequestTimeoutException(`Timeout : ${error.meta.time}`);
            case 'P2025' || 'P2018':
                throw new common_1.NotFoundException(`operation failed because it depends on one or more records that were required but not found: ${error.meta.cause}`);
            case 'P2002':
                throw new common_1.ConflictException('There is a unique constraint violation');
            case 'P2003':
                throw new common_1.NotFoundException(`operation failed because it depends on one or more records that were required but not found: ${error.meta.cause}`);
            case "P5011":
                throw new common_1.BadRequestException('Validation error: Invalid type passed');
            case "P2023":
                throw new common_1.BadRequestException('Validation error: Invalid value passed in request');
            default:
                console.error(error);
                throw new common_1.InternalServerErrorException('Something went wrong on the server');
        }
    }
    else if (error instanceof client_1.Prisma.PrismaClientValidationError) {
        console.error(error.message);
        throw new common_1.BadRequestException('Validation error: Invalid type passed');
    }
    else {
        console.error(error);
        throw new common_1.InternalServerErrorException('Something went wrong on the server');
    }
}
exports.requestErrorThrow = requestErrorThrow;
//# sourceMappingURL=request.errors.js.map