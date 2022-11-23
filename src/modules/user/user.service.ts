import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/db/prisma.service';
import { UserDto } from './protocols/user-dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(data: UserDto) {
    const userAlreadyExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists) {
      throw new Error('User Already Exists');
    }

    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }
}
