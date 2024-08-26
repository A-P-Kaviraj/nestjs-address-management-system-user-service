import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [
    { id: 1, name: 'ANY-NAME', email: 'ANY-EMAIL@EXAMPLE.com' },
    { id: 2, name: 'ANY-NAME', email: 'ANY-EMAIL@EXAMPLE.com' },
  ];

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
