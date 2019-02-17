import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component'
import { UserComponent } from './user/user.component'
import { StatisticComponent } from './statistic/statistic.component'

const routes: Routes = [ 
  { path: 'project', component: ProjectComponent },
  { path: 'user', component: UserComponent },
  { path: 'statistic', component: StatisticComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
