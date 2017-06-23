import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-event-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [ngSwitch]="event.type">
      <i *ngSwitchCase="'Training'" class="fa fa-crosshairs" aria-hidden="true"></i>
      <i *ngSwitchCase="'Competition'" class="fa fa-trophy" aria-hidden="true"></i>
      <a
        class="cal-event-title"
        href="javascript:;"
        [innerHTML]="event.type">
      </a>
    </div>
  `
})
export class CalendarEventTitleComponent {

  @Input() event: CalendarEvent;

  @Input() view: string;

}