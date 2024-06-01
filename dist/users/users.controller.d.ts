import { UsersService } from './users.service';
type UserRole = 'Software Engineer' | 'Intern' | 'Student';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: UserRole): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(user: {
        name: string;
        email: string;
        role: UserRole;
    }): {
        name: string;
        email: string;
        role: "Software Engineer" | "Intern" | "Student";
        id: number;
    };
    update(id: string, userUpdate: {
        name?: string;
        email?: string;
        role?: UserRole;
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
export {};
