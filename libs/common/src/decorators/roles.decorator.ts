import { Role } from '@eshop/core';
import { SetMetadata } from '@nestjs/common';

const ROLES_KEY = "roles"
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
