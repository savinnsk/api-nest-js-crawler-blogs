import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  id?: string;

  @ApiProperty({
    description: 'user name',
    example: 'fulano de tal',
  })
  name: string;

  @ApiProperty({
    description: 'password to protect user account',
    example: 'hackme',
  })
  password: string;

  @ApiProperty({
    description: 'user email',
    example: 'fulano@mail.com',
  })
  email: string;
}
