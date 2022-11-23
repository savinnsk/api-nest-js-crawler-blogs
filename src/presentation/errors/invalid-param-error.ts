import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidParamError extends HttpException {
  constructor(field: string) {
    super(`Invalid Param ${field}`, HttpStatus.BAD_REQUEST);
  }
}
