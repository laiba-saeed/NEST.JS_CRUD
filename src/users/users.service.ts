import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": "Laiba Saeed",
      "email": "laibasaeed@gmail.com",
      "role": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Mohaib Ali",
      "email": "mohaibali@gmail.com",
      "role": "Intern"
    },
    {
      "id": 3,
      "name": "Mushaf Ali",
      "email": "mushafali@gmail.com",
      "role": "Student"
    },
    {
      "id": 4,
      "name": "Talal Ahmad",
      "email": "talalahmad@gmail.com",
      "role": "Student"
    },
  ];

  // Methods
  findAll(role?: 'Software Engineer' | 'Intern' | 'Student') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  create(user: { name: string, email: string, role: 'Software Engineer' | 'Intern' | 'Student' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number, updatedUser: { name?: string, email?: string, role?: 'Software Engineer' | 'Intern' | 'Student' }) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
