import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalendarModule } from './calendar/calendar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CalendarModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
