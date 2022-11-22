import { Injectable } from '@nestjs/common';
import { UserDto } from './protocols/user-dto';

@Injectable()
export class UserService {
  async create(data: UserDto) {}
}
