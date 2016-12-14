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
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'mwl-calendar-open-day-events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="cal-open-day-events" [@collapse] *ngIf="isOpen">
      <h4>{{openDay.date|date:'d/M/y'}}</h4>  
      <div
        *ngFor="let event of events"
        [ngClass]="event?.cssClass" >
        <span class="cal-event" *ngIf="!isDetail" [style.backgroundColor]="event.color.primary"></span>
        <mwl-calendar-event-title *ngIf="!isDetail"
          [event]="event"
          view="month"
          (click)="eventClicked(event)">
        </mwl-calendar-event-title>
        <mwl-calendar-event-actions [event]="event"></mwl-calendar-event-actions>
      </div>
      <mwl-calendar-add-event *ngIf="!isDetail" [day]="openDay.date" [refresh]="refresh">
      </mwl-calendar-add-event>
      <mwl-calendar-event-detail *ngIf="isDetail" [event]="this.ev" (openDetail)="openDetail($event)"></mwl-calendar-event-detail>
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

  @Input() events: Event[];

  @Input() openDay: MonthViewDay;

  @Input() refresh: Subject<any>;

  isDetail:Boolean = false;
  ev:Event;

 // @Output() eventClicked: EventEmitter<{event: Event}> = new EventEmitter<{event: Event}>();

  eventClicked(event: Event): void {
    this.openDetail(true);
    this.ev = event;
  }

  openDetail(state:boolean):void{
    this.isDetail = state;
  }
}