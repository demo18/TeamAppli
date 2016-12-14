import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mwl-calendar-event-detail',
  template: ` <div>
  {{event.team}} : {{event.type}} 
  </div>
  <div class="btn btn-primary"(click)="openDetail.emit(false)">retour</div> `
})
export class CalendarEventDetailComponent {

  @Input() event: Event;
  @Output() openDetail: EventEmitter<{event: boolean}> = new EventEmitter<{event: boolean}>();

}
