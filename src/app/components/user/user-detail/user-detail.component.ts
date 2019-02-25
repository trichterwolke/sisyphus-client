import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    private user: User = new User();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
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

    public onDelete() {
        this.userService.delete(this.user.id);
        this.router.navigate(['/user']);
    }

    public onSave() {
        if (this.user.id === 0) {
            this.userService.create(this.user);
        } else {
            this.userService.update(this.user);
        }

        this.userService.delete(this.user.id);
        this.router.navigate(['/user']);
    }
}
