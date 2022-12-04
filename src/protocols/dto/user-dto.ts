import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { User } from 'src/entities/user';
export class UserDto extends User {
  id?: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  @IsEmail()
  email: string;
}
