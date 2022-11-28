import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { HookHandlerDoneFunction, FastifyReply } from 'fastify';

import { validate } from 'class-validator';
import { LoginRequestBody } from 'src/domain/auth/protocols/login-request-body';

@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  async use(req: any, res: FastifyReply, handle: HookHandlerDoneFunction) {
    const { email, password } = req.body;

    const loginRequestBody = new LoginRequestBody();
    loginRequestBody.email = email;
    loginRequestBody.password = password;

    const validations = await validate(loginRequestBody);

    if (validations.length) {
      throw new BadRequestException(
        validations.reduce((acc, curr) => {
          return [...acc, ...Object.values(curr.constraints)];
        }, []),
      );
    }

    handle();
  }
}
