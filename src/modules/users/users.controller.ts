import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { QueryUserDto, UpdateUserDto } from '@eshop/core'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getMany(@Query() filter: QueryUserDto) {
    return this.usersService.getMany(filter)
  }

  @Get(':id')
  getOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getOne(id)
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto)
  }

  @Delete('id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.deleteOne(id)
  }
}
