import { Injectable } from '@angular/core';
import { events } from './events'
import { myEvent } from './events'

@Injectable()
export class EventsService {

  constructor() { }

  getEvents(): myEvent[] {
    return events;
  }

  addEvents(ev: myEvent): void {
    events.push(ev);
  }

  delEvents(ev: myEvent): void {
    //events.filter(iEvent => iEvent !== ev);
  }

}
