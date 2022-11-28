import { ApiProperty } from '@nestjs/swagger';

export class LoginFields {
  @ApiProperty({
    description: 'type valid email',
    example: 'vaildmail@mail.com',
  })
  email: string;

  @ApiProperty({
    description: 'type a valid password',
    example: 'valid-password',
  })
  password: string;
}
