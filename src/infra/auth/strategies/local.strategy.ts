import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginFields } from 'src/domain/auth/protocols/login-fields';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  validate(LoginFields: LoginFields) {
    const { email, password } = LoginFields;
    return this.authService.validateUser({ email, password });
  }
}
