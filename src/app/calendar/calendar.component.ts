import { Component  } from '@angular/core';
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
import { EventsService } from './events.service';




interface myEvent extends CalendarEvent {
    users?: any[];
}


@Component({
  selector: 'app-cal',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {  view: string = 'month';

  constructor( private EvServ: EventsService){}
  viewDate: Date = new Date();

  // actions: EventAction[] = [{
  //   label: '<i class="fa fa-fw fa-pencil"></i>',
  //   onClick: ({event}: {event: myEvent}): void => {
  //     console.log('Edit event', event);
  //   }
  // }, {
  //   label: '<i class="fa fa-fw fa-times"></i>',
  //   onClick: ({event}: {event: myEvent}): void => {
  //     //this.EvServ.delEvents(event);
  //     //this.events = this.events.filter(iEvent => iEvent !== event);
  //   }
  // }];

  events = this.EvServ.getEvents();
  // events: myEvent[]=[{
  //   users:["toto"],
  //   start: subDays(startOfDay(new Date()), 1),
  //   end: addDays(new Date(), 1),
  //   title: 'A 3 day event',
  //   color: colors.red,
  //   actions: this.actions
  // }, {
  //   start: startOfDay(new Date()),
  //   title: 'An event with no end date',
  //   color: colors.yellow,
  //   actions: this.actions
  // }, {
  //   start: subDays(endOfMonth(new Date()), 3),
  //   end: addDays(endOfMonth(new Date()), 3),
  //   title: 'A long event that spans 2 months',
  //   color: colors.blue
  // }, {
  //   start: addHours(startOfDay(new Date()), 2),
  //   end: new Date(),
  //   title: 'A resizable event',
  //   color: colors.yellow,
  //   actions: this.actions,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   }
  // }];

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

  

  // addClicked(day: MonthViewDay) {
  //   console.log("addClicked:"+day.date);
  //   var date = {
  //   users:["added"],
  //   start: day.date,
  //   end: day.date,
  //   title: 'added',
  //   color: colors.red,
  //   actions: this.actions
  //   };
  //   //this.events.push(date);
  //   this.EvServ.addEvents(date);
  //   this.refresh.next();
  //   this.CalServ.setFormIsOpen(false);
  // }

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
