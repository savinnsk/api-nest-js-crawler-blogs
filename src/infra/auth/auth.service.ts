import { Injectable } from '@nestjs/common';
import { UserPayload } from 'src/domain/auth/protocols/user-payload';
import { comparePassword } from 'src/infra/cryptograpy/bcrypt/bcrypt-helper';
import { User } from 'src/modules/user/entity/user';
import { InvalidParamError } from 'src/presentation/errors/invalid-param-error';
import { UserService } from '../../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from 'src/domain/auth/protocols/user-token';
import { LoginFields } from 'src/domain/auth/protocols/login-fields';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }
  async validateUser(LoginFields: LoginFields) {
    const { email, password } = LoginFields;
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
