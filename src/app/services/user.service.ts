import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { USERS } from '../mocks/mock-users';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    users: User[];

    constructor(private message: MessageService) {
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
        this.message.success('Speichern erfolgreich!');
    }

    update(user: User) {
        const index = this.users.findIndex(u => u.id === user.id);
        this.users[index] = user;
        this.message.success('Speichern erfolgreich!');
    }

    delete(id: number) {
        const index = this.users.findIndex(u => u.id === id);
        this.users.splice(index, 1);
        this.message.success('Löschen erfolgreich!');
    }
}
