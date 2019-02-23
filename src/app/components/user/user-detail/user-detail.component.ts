import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    user: User = new User();

    constructor(
        private route: ActivatedRoute,
        public sidenavService: SidenavService,
        private userService: UserService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id: number = +params['id']; // (+) converts string 'id' to a number
            if (id > 0) {
                this.userService.find(id).subscribe(u => this.user = u);
            }
            // In a real app: dispatch action to load the details here.
        });
    }
}
