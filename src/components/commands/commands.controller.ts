import { Controller } from '@nestjs/common';
import { CommandsService } from './commands.service';

@Controller('commands')
export class CommandsController {
  constructor(private commandsService: CommandsService) {
  }
}
