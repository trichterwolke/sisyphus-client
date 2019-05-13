import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    public login(credentials: Credentials) {
        this.http.post<User>('http://localhost/api/session', credentials)
            .subscribe(
                success => this.messageService.success('Willkommen ' + success.firstName + ' ' + success.lastName ),
                error => this.messageService.error(error.message));
    }
}