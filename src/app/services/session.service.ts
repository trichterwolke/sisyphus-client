import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class SessionService {
    constructor(
        private http: HttpClient,
        private messageService: MessageService) {
    }

    public login(credentials: Credentials) {
        
        //this.http.get('https://wil-service.de/api/test', { responseType: 'text'})
        //this.http.post('https://wil-service.de/api/session', '{"user": "","password": ""}')
        this.http.post('https://wil-service.de/api/session', credentials)
        //this.http.delete('https://wil-service.de/api/session')
            .subscribe(
                success => this.messageService.success(success.toString()),
                error => this.messageService.error(error.message));
    }
}