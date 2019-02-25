import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatListModule,
  MatNativeDateModule,
  MatSortModule
} from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';

// own modules, components and servies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ProjectComponent } from './components/project/project.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { MenuButtonComponent } from './components/shared/menu-button/menu-button.component';
import { WorklogComponent } from './components/worklog/worklog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    SidenavComponent,
    UserComponent,
    StatisticComponent,
    UserDetailComponent,
    MenuButtonComponent,
    WorklogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatRippleModule
  ],
  //providers: [SidenavService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('ctc-app-theme');
  }
}
