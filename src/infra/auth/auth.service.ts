import { Injectable } from '@nestjs/common';
import { comparePassword } from 'src/infra/cryptograpy/bcrypt/bcrypt-helper';
import { User } from 'src/modules/user/entity/user';
import { InvalidParamError } from 'src/presentation/errors/invalid-param-error';
import { UserService } from '../../modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  login(user: User) {
    throw new Error('Method not implemented.');
  }
  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      await comparePassword(user.password, password);

      return {
        ...user,
        password: undefined,
      };
    }

    throw new InvalidParamError('Email or password');
  }
}
