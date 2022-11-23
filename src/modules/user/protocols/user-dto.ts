import { User } from '../entity/user';

export class UserDto extends User {
  id?: string;

  name: string;

  password: string;

  email: string;
}
