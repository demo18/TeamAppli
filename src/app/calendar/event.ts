import { CalendarEvent, EventAction, MonthViewDay, EventColor } from 'calendar-utils';
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

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

export class Event {
  constructor(
    public start: Date,
    public id?: any,
    public title?: string,
    public color?: any,
    public type?: string,
    public team?: string,
    public lieu?: string,
    public details?: string,
    public end?: Date,
    public actions?: EventAction[],
    public cssClass?: string,
    public users?: any[]
  ) {  }
}