import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

import { EventsService } from './_services/events.service';
import { UsersService } from './_services/users.service';
import { PresentService } from './_services/present.service';
import { AlertService } from './_services/alert.service';
import{ AuthGuard } from'./_services/auth-guard.service';
import{ AuthService } from'./_services/auth.service';

import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';
import {LocationStrategy, Location, HashLocationStrategy } from '@angular/common'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LOCALE_ID } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  providers: [EventsService,UsersService,PresentService,AuthGuard,AuthService,AlertService,{ provide: LOCALE_ID, useValue: 'fr-FR' },{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    StatsComponent,
    ProfileComponent,
    NavComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CalendarModule.forRoot(),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
