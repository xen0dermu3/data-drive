import { HttpException, HttpStatus } from '@nestjs/common';

export class GrpcException extends HttpException {
  constructor() {
    super('Problems with grpc connection', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
