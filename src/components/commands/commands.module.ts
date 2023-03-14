import { Module } from '@nestjs/common';
import { CommandsService } from './commands.service';
import { CommandsController } from './commands.controller';

@Module({
  providers: [CommandsService],
  controllers: [CommandsController]
})
export class CommandsModule {}
