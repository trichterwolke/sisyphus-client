import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { USERS } from '../mocks/mock-users';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    users: User[];

    constructor(
        private http: HttpClient,
        private message: MessageService) {
        this.users = USERS;
    }

    findAll(): Observable<User[]> {

        return this.http.get<User[]>(/*'https://wil-service.de*/'/api/User');
            /*.pipe(
                retry(1),
                catchError(this.message.error),
            );*/
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
