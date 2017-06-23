import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { PresentService } from './../../../_services/present.service';
import { AuthService } from './../../../_services/auth.service';
import { EventsService } from './../../../_services/events.service';
import { Event } from './../../event';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mwl-calendar-event-detail',
  template: ` 
  <div style="color: black; padding: 0px 0px 15px 0px;">
    <ul class="list-group">
      <li class="list-group-item"><b>Type : </b>{{event.type}}</li>
      <li class="list-group-item"><b>Teams : </b>{{event.team}}</li>
      <li class="list-group-item"><b>Terrain : </b>{{event.lieu}}</li>
      <li *ngIf="event.details!=''"class="list-group-item"><b>Details : </b>{{event.details}}</li>
      <li class="list-group-item"><b>Présent : </b>(à venir)</li>
    </ul>
  </div>

    <button *ngIf="!(present | async)" class="btn btn-sm btn-danger"(click)="presentClicked()">Absent</button>
    <button *ngIf="present | async" class="btn btn-sm btn-success"(click)="absentClicked()">Present</button>

  <button class="btn btn-sm btn-default"(click)="openDetail.emit(false)">Retour</button> 
  <button class="btn btn-sm btn-default"(click)="delEvent()">Supprimer</button>`
})
export class CalendarEventDetailComponent {

  constructor( private PresServ: PresentService, private AuthServ:AuthService, private EvServ:EventsService){}  

  @Input() event: Event;
  @Output() openDetail: EventEmitter<{event: boolean}> = new EventEmitter<{event: boolean}>();

  bSubject = new BehaviorSubject<boolean>(false); 
  present = this.bSubject.asObservable();

   ngOnInit() {
     console.log("init "+this.event.id);
     this.PresServ.getId(this.AuthServ.currentUser.id,this.event.id).subscribe(
      data=>{
        console.log(data.present);
        if(data.present.length == 0){
          this.bSubject.next(false);
        }
        else{
          this.bSubject.next(true);
        }
        console.log(this.present);
     });
   }

  delEvent(){
    this.EvServ.delete(this.event.id).subscribe(
      data=>{
        this.EvServ.getAll();
      }
    );
  }

  presentClicked(){
    this.PresServ.create(this.AuthServ.currentUser.id,this.event.id).subscribe();
    this.bSubject.next(true);
  }
  absentClicked(){
    this.PresServ.getId(this.AuthServ.currentUser.id,this.event.id).subscribe(
      data=>{
        this.PresServ.delete(data.present[0].id).subscribe(
          data=>{
            this.bSubject.next(false);
          }
        );
      }
    );
    
  }

}
