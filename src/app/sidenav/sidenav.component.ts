import { Component, OnInit, HostListener } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private sidenavService: SidenavService, private router: Router) { }

  public close() {
      this.sidenavService.close();
  }

  public navigate(route: string) {
      this.sidenavService.close();
      this.router.navigate([route]);
  }

  ngOnInit() {
  }
}