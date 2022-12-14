import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hashPassword } from 'src/infra/cryptograpy/bcrypt/bcrypt-helper';
import { PrismaService } from 'src/infra/db/prisma.service';
import { InvalidParamError } from 'src/presentation/errors/invalid-param-error';
import { UserDto } from 'src/protocols/dto/user-dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dataCreateUser: UserDto) {
    const { password, email } = dataCreateUser;

    const UserAlreadyExists = await this.findByEmail(email);

    if (UserAlreadyExists) {
      return new InvalidParamError('email');
    }

    const data = {
      ...dataCreateUser,
      password: await hashPassword(password),
      email,
    };

    const user = await this.prisma.user.create({
      data,
    });

    return { ...user, password: undefined };
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  async update(id: string, data: UserDto) {
    const userExists = this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    const dataUserUpdate = {
      ...data,
      password: await hashPassword(data.password),
    };

    if (!userExists) {
      return new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }
    return await this.prisma.user.update({
      data: dataUserUpdate,
      where: { id },
    });
  }

  async delete(id: string) {
    const userExists = this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userExists) {
      throw new Error('User does not exist');
    }
    return await this.prisma.user.delete({ where: { id } });
  }
}
