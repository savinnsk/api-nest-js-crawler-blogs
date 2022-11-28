import { FastifyReply } from 'fastify';

export interface SuccessResponse extends FastifyReply {
  statusCode: number;
  message: string;
}
