import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { MatSnackBarConfig } from '@angular/material';
import { ProblemDetails } from 'src/app/models/problem-details';
import { forEach } from '@angular/router/src/utils/collection';

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

    public onSave() {/*
        if (this.user.id === 0) {
            this.userService.create(this.user);
        } else {
            this.userService.update(this.user);
        }

        this.router.navigate(['/user']);*/
        this.do();
    }

    do() {
        /*
        const problem: ProblemDetails = {
            title: 'very bad error',
            detail: 'very very sad :-(',
            errors: [
                ['firstname', ['fehler alpha', 'fehler beta']],
                //[ 'lastname', ['fehler gamma', 'fehler delta']],
            ],
            status: 400,
        };

        problem.errors.push(['lastname', ['fehler gamma', 'fehler delta']]);
        problem.errors.push(['email', ['missing']]);
*/

        const json = '{"errors":{"Name":["Not optional"],"Password":["To short","Missing number","Missing upper case"]},"title":"Validation error","status":400}';
        const obj = JSON.parse(json);

        const p = new ProblemDetails();
        Object.assign(p, obj);
        this.print(obj);

        //this.print(obj);
    }

    print(problem: ProblemDetails) {
        console.log('title: ' + problem.title);

        for (const key in problem.errors) {
            if (problem.errors.hasOwnProperty(key)) {
                const element = problem.errors[key];
                console.log(key + ': ' + element[0]);
            }
        }


    }
}
