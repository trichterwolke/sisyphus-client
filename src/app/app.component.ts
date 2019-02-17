import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from './sidenav/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sisyphus-material';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 600) {
      this.sidenav.mode = 'side';
      if (!this.sidenav.opened) {
        this.sidenav.open();
      }
    } else {
      this.sidenav.mode = 'over';
      if (this.sidenav.opened) {
        this.sidenav.close();
      }
    }
  }

  @ViewChild('sidenav')
  private sidenav: MatSidenav;

  constructor(private router: Router, private sidenavService: SidenavService) {
    this.router.events.subscribe(event => {
      // close sidenav on routing     
      this.sidenavService.close();
    });
  }

  ngOnInit() {
    /**
    When you reveive order to open / close sidenav.
    **/
    this.sidenavService.asObservable().subscribe(() => {      
      this.sidenav.toggle();
    });
  }
/*
  onOpenedChange() {
    this.sidenavService.silenceOpen();
  }
  onClosedChange() {
    this.sidenavService.silenceClose();
  }*/
}
