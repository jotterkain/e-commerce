import { SetMetadata } from '@nestjs/common';

export const AuthUser = (...args: string[]) => SetMetadata('auth-user', args);
