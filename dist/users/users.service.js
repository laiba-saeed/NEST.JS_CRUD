"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
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
    }
    findAll(role) {
        if (role) {
            return this.users.filter((user) => user.role === role);
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    create(user) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user,
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updatedUser) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter((user) => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map