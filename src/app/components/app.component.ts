import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../services/sidenav.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public opened = '';
    public mode = 'side'

    @ViewChild('sidenav')
    private sidenav: MatSidenav;

    constructor(private sidenavService: SidenavService) {
        this.setSidenavMode(window.innerWidth);

        // When you reveive order to open/close sidenav. 
        this.sidenavService.asObservable().subscribe((isOpen: boolean) => {
            if (isOpen) {
                this.sidenav.open();
            }
            else {
                this.sidenav.close();
            }
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.setSidenavMode(event.target.innerWidth);
    }

    private setSidenavMode(innerWidth: number) {
        if (innerWidth > 600) {            
            this.opened = '';
            this.mode = 'side'
            this.sidenavService.isOpen = true;
            this.sidenavService.mode = 'side'
        }
        else {
            this.opened = null;
            this.mode = 'over'
            this.sidenavService.isOpen = false;
            this.sidenavService.mode = 'over'
        }
    }
}
