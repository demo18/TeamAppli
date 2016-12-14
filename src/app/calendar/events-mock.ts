import { CalendarEvent, EventAction, MonthViewDay } from 'calendar-utils';
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
import { Event, colors } from './event'



export const events: Event[]=[{
    users:["toto"],
    start: subDays(startOfDay(new Date()), 1),
    type:'Training',
    team:'Tous',
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    type:'Competition',
    team:'D1',
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    type:'Training',
    team:'Tous',
    title: 'A long event that spans 2 months',
    color: colors.blue
  }, {
    start: addHours(startOfDay(new Date()), 2),
    type:'Training',
    team:'Tous',
    end: new Date(),
    title: 'A resizable event',
    color: colors.yellow,
    actions: this.actions
  }];

