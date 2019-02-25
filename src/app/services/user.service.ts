import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { USERS } from '../mocks/mock-users';


//import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    users: User[];

    constructor() {
        this.users = USERS;
    }

    findAll(): Observable<User[]> {
        return of(this.users);
    }

    find(id: number): Observable<User> {
        return of(this.users.find(u => u.id === id));
    }

    create(user: User) {
        this.users.push(user);
    }

    update(user: User) {
        const index = this.users.findIndex(u => u.id === user.id);
        this.users[index] = user;
    }

    delete(id: number) {
        const index = this.users.findIndex(u => u.id === id);
        this.users.splice(index, 1);
    }
}