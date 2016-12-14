import { Injectable } from '@angular/core';
import { events } from './events-mock';
import { Event } from './event';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class EventsService {

  private eventsUrl = 'http://demoabd.phpnet.org/TeamAppli/api.php/events?transform=1';

  constructor (private http: Http) {}

  getEvents() {
    return events;
  }

  getEventsREST(){

   return this.http.get('http://demoabd.phpnet.org/TeamAppli/api.php/events?transform=1')
                    .map((res:Response) => res.json());

    //console.log("rest: "+ res.text);
                    
  }
  // private extractData(res: Response) {
  //   let body = res.json();
  //   console.log("body: "+ body.data);
  //   return body.data || { };
  // }

  // private handleError (error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

  addEvents(ev: Event): void {
    events.push(ev);
    console.log("service add :"+ ev.type);
  }

  delEvents(ev: Event): void {
    //events.filter(iEvent => iEvent !== ev);
  }

}
