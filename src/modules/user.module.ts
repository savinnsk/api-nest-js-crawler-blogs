import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { PrismaService } from 'src/infra/db/prisma.service';
import { UserController } from 'src/controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
