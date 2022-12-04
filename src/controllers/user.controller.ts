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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FastifyReply } from 'fastify';
import { IsPublic } from 'src/infra/auth/decorators/is-public.decorator';
import { UserDto } from 'src/protocols/dto/user-dto';
import { UserService } from 'src/services/user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  @IsPublic()
  @Post()
  async create(@Body() data: UserDto) {
    try {
      const user = await this.userService.create(data);
      return user;
    } catch (e) {
      return e;
    }
  }

  @ApiBearerAuth()
  @Get()
  async findAll(@Res() res: FastifyReply) {
    try {
      const users = await this.userService.findAll();
      return res.code(201).send(users);
    } catch (e) {
      return e;
    }
  }

  @ApiBearerAuth()
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
        .send({ message: `user ${user.name} updated with success` });
    } catch (err) {
      return err;
    }
  }

  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: FastifyReply) {
    try {
      const user = await this.userService.delete(id);
      return res
        .code(201)
        .send({ message: `user ${user.name} deleted with success` });
    } catch (err) {
      return err;
    }
  }
}
