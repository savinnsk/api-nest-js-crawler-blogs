import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './protocols/user-dto';
import { UserService } from './user.service';
import { FastifyReply } from 'fastify';

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
      return user;
    } catch (e) {
      return e;
    }
  }

  @Get()
  async findAll(@Res() res: FastifyReply) {
    try {
      const users = await this.userService.findAll();
      return res.code(201).send(users);
    } catch (e) {
      return e;
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Res() res: FastifyReply,
    @Body() data: UserDto,
  ) {
    try {
      const user = await this.userService.update(id, data);
      return res
        .code(201)
        .send({ message: 'user updated with success', body: user });
    } catch (err) {
      return res.code(500).send({ message: 'Error', body: err });
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
