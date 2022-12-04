import { FastifyRequest } from 'fastify';
import { User } from 'src/entities/user';

export interface AuthRequest extends FastifyRequest {
  user: User;
}
