import { Role } from '@eshop/core';
import { SetMetadata } from '@nestjs/common';

const ROLES_KEY = "roles"
/**
 * Set the required role(s) for the next handler.
 * 
 * Should be used in combination with the {RoleGuard} to take effect.
 * @param ...roles
**/
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
