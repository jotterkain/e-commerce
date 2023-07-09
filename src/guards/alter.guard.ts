import { Role } from "@eshop/core";
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { isEmpty } from "class-validator";
import { Request } from "express";

@Injectable()
export class AlterGuard implements CanActivate {
    constructor() {}
    canActivate(context: ExecutionContext): boolean {
        const request:Request = context.switchToHttp().getRequest()
        if(isEmpty(request.params.id))
            return true
        if(request.params.id!==request["user"].id && (request["user"].role as Role)!==Role.ADMIN)
            throw new ForbiddenException(`Only allowed to the concerned user`)
        return true
    }
}