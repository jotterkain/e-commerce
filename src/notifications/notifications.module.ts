import { Global, Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';

@Global()
@Module({
  providers: [NotificationsService],
  exports: [NotificationsService],
  controllers: [NotificationsController]
})
export class NotificationsModule {}
