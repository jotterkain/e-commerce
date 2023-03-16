import { Prisma } from '@prisma/client';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';

export function requestErrorThrow(error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P1008':
        throw new RequestTimeoutException(`Timeout : ${error.meta.time}`);
      case 'P2025' || 'P2018':
        throw new NotFoundException(`operation failed because it depends on one or more records that were required but not found: ${error.meta.cause}`);
      case 'P2002':
        throw new ConflictException('There is a unique constraint violation');
      case 'P2003':
        throw new NotFoundException(`operation failed because it depends on one or more records that were required but not found: ${error.meta.cause}`);
      case "P5011":
        throw new BadRequestException('Validation error: Invalid type passed');
      case "P2023":
        throw new BadRequestException('Validation error: Invalid value passed');
      default:
        console.error(error);
        throw new InternalServerErrorException('Something went wrong on the server');
    }
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    console.error(error.message)
    throw new BadRequestException('Validation error: Invalid type passed');
  } else {
    console.error(error);
    throw new InternalServerErrorException('Something went wrong on the server');
  }
}