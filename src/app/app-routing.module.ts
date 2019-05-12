import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { WorklogComponent } from './components/worklog/worklog.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: '', component: WorklogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
