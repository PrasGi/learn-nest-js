import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'user1@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'user2@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'user3@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
