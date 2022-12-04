import { Injectable } from '@nestjs/common';
import { UserPayload } from 'src/domain/auth/protocols/user-payload';
import { comparePassword } from 'src/infra/cryptograpy/bcrypt/bcrypt-helper';
import { User } from 'src/entities/user';
import { InvalidParamError } from 'src/presentation/errors/invalid-param-error';
import { UserService } from '../../services/user.service';
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

  async validateUser(loginFields: LoginFields) {
    const { email, password } = loginFields;
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isValid = await comparePassword(password, user.password);
      if (isValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new InvalidParamError('Email or password');
  }
}
