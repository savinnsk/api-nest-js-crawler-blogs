import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { badRequest, ok } from 'src/presentation/helpers/http';
import { HttpResponse } from 'src/presentation/protocols/http-protocols';
import { UserDto } from './protocols/user-dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  @Post()
  async create(@Body() data: UserDto) {
    try {
      const user = await this.userService.create(data);
      return ok(user);
    } catch (e) {
      return badRequest(e);
    }
  }

  @Get()
  async findAll(): Promise<HttpResponse> {
    const users = await this.userService.findAll();

    return { statusCode: 201, body: users };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UserDto) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
