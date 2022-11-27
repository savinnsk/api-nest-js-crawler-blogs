import { FastifyRequest } from 'fastify';
import { User } from 'src/modules/user/entity/user';

export interface AuthRequest extends FastifyRequest {
  user: User;
}
