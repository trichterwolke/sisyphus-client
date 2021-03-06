import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { User } from 'src/app/models/user';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MessageService } from 'src/app/services/message.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'birthday'];
    users: User[];
    dataSource: MatTableDataSource<User>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private message: MessageService,
        public sidenavService: SidenavService,
        private userService: UserService) {
        userService.findAll().subscribe(
            users => this.dataSource = new MatTableDataSource(users),
            error => this.message.error(error));
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
