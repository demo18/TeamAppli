import { Component,OnInit  } from '@angular/core';
import {
  startOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import {  CalendarEventTimesChangedEvent} from './interfaces/calendarEventTimesChangedEvent.interface';
import { CalendarEvent, EventAction, MonthViewDay } from 'calendar-utils';

import 'font-awesome/css/font-awesome.css';

import { CalendarAddEventsComponent } from'./components/common/calendarAddEvents.component';
import { EventsService } from './../_services/events.service';
import { Observable }     from 'rxjs/Observable';
import { Event } from './event';

@Component({
  selector: 'app-cal',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{ 

  constructor( private EvServ: EventsService){}

  ngOnInit() { 

    this.EvServ.getAll();

    this.EvServ.events.subscribe(
      data=> {
        this.events = data;//.map(data.start => new Date(data.start));
        this.events = data.map(function(x){
          x.start = new Date(new Date(x.start.toString().replace(/-/g, "/")));
          console.log("DATE "+x.start);
          // console.log (new Date('2011-04-12'.replace(/-/g, "/")));
          return x;
        });

        //this.events[0].start = new Date(this.events[0].start);
        console.log(this.events);
      }
    );
  }

  viewDate: Date = new Date();
  view: string = 'month';
 
  events:Event[]=[]; 
  errorMessage: any;
  
  
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = false;
 

  increment(): void {

    const addFn: any = {
      day: addDays,
      week: addWeeks,
      month: addMonths
    }[this.view];

    this.viewDate = addFn(this.viewDate, 1);

  }

  decrement(): void {

    const subFn: any = {
      day: subDays,
      week: subWeeks,
      month: subMonths
    }[this.view];

    this.viewDate = subFn(this.viewDate, 1);

  }

  today(): void {
    this.viewDate = new Date();
  }

  eventClicked(event: CalendarEvent): void {

    console.log(event);
       
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    console.log(date);
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) 
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
}
