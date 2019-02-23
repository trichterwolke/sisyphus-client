import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { USERS } from '../mocks/mock-users';


//import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() { }

  findAll(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(USERS);
  }

  find(id: number): Observable<User> {
    return of(USERS.find(u => u.id === id));
  }
}
