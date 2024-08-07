import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller(`/users/`)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.users({})
  }

  @Post()
    createUser(@Body() data: Prisma.UserCreateInput) {
        return this.userService.createUser(data)
    }
}
