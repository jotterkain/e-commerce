import { Role } from '@eshop/core';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext,): boolean {
    const requiredRoles: Role[] = this.reflector.getAllAndOverride<Role[]>("roles", [context.getHandler(), context.getClass()])
    const request = context.switchToHttp().getRequest()
    const user = request.user

    if (!requiredRoles) {
      return true
    }

    const ans = requiredRoles.includes(user.role as Role)
    if (!ans) throw new ForbiddenException(`Only allowed to: ${requiredRoles.map(role => role).join(", ")}.`)
    return true
  }
}
