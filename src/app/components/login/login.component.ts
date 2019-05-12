import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials: Credentials = new Credentials();

  constructor(private sessionService: SessionService) { }

  public login(){
      this.sessionService.login(this.credentials);
  }

  ngOnInit() {
  }

}
