import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  user: User = new User();

  constructor(public sidenavService: SidenavService) {
  }

  ngOnInit() {
  }
}