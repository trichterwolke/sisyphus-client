import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';
import { StatisticComponent } from './components/statistic/statistic.component';

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
