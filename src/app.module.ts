import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { SecurityModule } from './security/security.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [PrismaModule, SecurityModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
