import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './protocols/user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  @Post()
  async create(@Body() data: UserDto) {
    return this.userService.create(data);
  }
}
