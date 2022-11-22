import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserDto } from './protocols/user-dto';

@Injectable()
export class UserService {
  private readonly prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }
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
}
