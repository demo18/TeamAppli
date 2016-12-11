import {
  Component,
  Input,
  ChangeDetectionStrategy,
  trigger,
  style,
  transition,
  animate,
  Output,
  EventEmitter
} from '@angular/core';
import { CalendarEvent,MonthViewDay } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-open-day-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cal-open-day-events" [@collapse] *ngIf="isOpen">
      <h4>{{openDay.date|date:'d/M/y'}}</h4> 
      <div
        *ngFor="let event of events"
        [ngClass]="event?.cssClass">
        <span class="cal-event" [style.backgroundColor]="event.color.primary"></span>
        <mwl-calendar-event-title
          [event]="event"
          view="month"
          (click)="eventClicked.emit({event: event})">
        </mwl-calendar-event-title>
        <mwl-calendar-event-actions [event]="event"></mwl-calendar-event-actions>
      </div>
      <mwl-calendar-add-event [day]="openDay" >
      </mwl-calendar-add-event>
    </div>
  `,
  animations: [
    trigger('collapse', [
      transition('void => *', [
        style({height: 0}),
        animate('150ms linear', style({height: '*'}))
      ]),
      transition('* => void', [
        style({height: '*'}),
        animate('150ms linear', style({height: 0}))
      ])
    ])
  ]
})
export class CalendarOpenDayEventsComponent {

  @Input() isOpen: boolean = false;

  @Input() events: CalendarEvent[];

  @Input() openDay: MonthViewDay;

  @Output() eventClicked: EventEmitter<{event: CalendarEvent}> = new EventEmitter<{event: CalendarEvent}>();

}