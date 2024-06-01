export declare class UsersService {
    private users;
    findAll(role?: 'Software Engineer' | 'Intern' | 'Student'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(user: {
        name: string;
        email: string;
        role: 'Software Engineer' | 'Intern' | 'Student';
    }): {
        name: string;
        email: string;
        role: 'Software Engineer' | 'Intern' | 'Student';
        id: number;
    };
    update(id: number, updatedUser: {
        name?: string;
        email?: string;
        role?: 'Software Engineer' | 'Intern' | 'Student';
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
