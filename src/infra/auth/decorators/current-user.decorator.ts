import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../../modules/user/entity/user';
import { AuthRequest } from '../../../domain/auth/protocols/auth-request';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
