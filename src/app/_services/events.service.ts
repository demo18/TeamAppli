import { Injectable } from '@angular/core';
import { Event } from './../calendar/event';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {

  private eventsUrl = 'http://vps374029.ovh.net/TeamAppli/api.php/events?transform=1';

  constructor (private http: Http) {}
 
  bSubject = new BehaviorSubject<Event[]>([]); 
  events = this.bSubject.asObservable();

  getAll(){
    this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/events?transform=1')
                    .map((res:Response) => res.json()).subscribe(
                      data=>{
                      this.bSubject.next(data.events);
                      }
                    );                 
  }
  getById(Id){
    return this.http.get('http://vps374029.ovh.net/TeamAppli/api.php/events/'+Id)
                    .map((res:Response) => res.json());
  }
  create(event: Event) {
    return this.http.post('http://vps374029.ovh.net/TeamAppli/api.php/events',event).map((res:Response) => res.json());
  }
  update(Id,event: Event){
      return this.http.put('http://vps374029.ovh.net/TeamAppli/api.php/events/'+Id,event).map((res:Response) => res.json());
  }
  delete(Id){
    return this.http.delete('http://vps374029.ovh.net/TeamAppli/api.php/events/'+Id).map((res:Response) => res.json());
  }

}
