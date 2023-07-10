import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from '@prisma/client';

/** 
 * Returns the current authenticated user.
 * 
 * Should be used only after AuthGuard.
 * @returns User
**/
export const AuthUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        const user = request.user
        return user as User
    }
)
