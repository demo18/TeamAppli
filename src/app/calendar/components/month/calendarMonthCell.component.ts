import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MonthViewDay } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-month-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cal-cell-top">
    <span class="cal-day-number">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>      
    </div>
    <div class="cal-events">
      <div *ngFor="let event of day.events" [ngSwitch]="event.type">
        <i *ngSwitchCase="'Training'" class="fa fa-crosshairs fa-2x" aria-hidden="true"></i>
        <i *ngSwitchCase="'Competition'" class="fa fa-trophy fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  `,
  host: {
    '[class]': '"cal-cell cal-day-cell " + day?.cssClass',
    '[class.cal-past]': 'day.isPast',
    '[class.cal-today]': 'day.isToday',
    '[class.cal-future]': 'day.isFuture',
    '[class.cal-weekend]': 'day.isWeekend',
    '[class.cal-in-month]': 'day.inMonth',
    '[class.cal-out-month]': '!day.inMonth',
    '[class.cal-has-events]': 'day.events.length > 0',
    '[class.cal-open]': 'day === openDay',
    '[style.backgroundColor]': 'day.backgroundColor'
  }
})
export class CalendarMonthCellComponent {

  @Input() day: MonthViewDay;

  @Input() openDay: MonthViewDay;

  @Input() locale: string;

  @Input() tooltipPlacement: string;

  @Output() highlightDay: EventEmitter<any> = new EventEmitter();

  @Output() unhighlightDay: EventEmitter<any> = new EventEmitter();

}