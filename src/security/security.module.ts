import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SecurityService } from './security.service';

@Module({
  imports: [
    ConfigModule
  ],
  providers: [SecurityService, ConfigService],
  exports: [SecurityService]
})
export class SecurityModule { }
