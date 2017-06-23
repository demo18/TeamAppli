import { Component, Input,Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { CalendarEvent,MonthViewDay,EventAction, EventColor } from 'calendar-utils';
import { Event } from './../../event';
import { EventsService } from './../../../_services/events.service';
import { Subject } from 'rxjs/Subject';


// const actions: EventAction[] = [{
//     label: '<i class="fa fa-fw fa-pencil"></i>',
//     onClick: ({event}: {event: Event}): void => {
//       console.log('Edit event', event);
//     }
//   }, {
//     label: '<i class="fa fa-fw fa-times"></i>',
//     onClick: ({event}: {event: Event}): void => {
//       //this.EvServ.delEvents(event);
//       //this.events = this.events.filter(iEvent => iEvent !== event);
//     }
//   }];
const colors: any = {
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


@Component({
  selector: 'mwl-calendar-add-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  {{diagnostic}}
  <div style="display:inline-block;float:right;">
    <div *ngIf="!this.addFormIsOpen" class="btn btn-primary"(click)="this.addFormIsOpen = true">+</div>
  </div>
  <div *ngIf="this.addFormIsOpen" style="color: black; padding: 15px 0px 0px 0px;">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Ajout date</h3>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group col-lg-2 col-sm-10">
            <label for="EventType">Type</label>
            <select id="EventType" class="form-control" [(ngModel)]="ev.type" name="type" #type="ngModel">
              <option *ngFor="let type of types" [value]="type">{{type}}</option>
            </select>
            <label for="Lieu">Terrain</label>
            <select id="Lieu" class="form-control" [(ngModel)]="ev.lieu" name="lieu" #lieu="ngModel">
              <option *ngFor="let lieu of lieux" [value]="lieu">{{lieu}}</option>
            </select>
            <label for="TeamType">Equipes</label>
            <select id="TeamType" class="form-control" [(ngModel)]="ev.team" name="team" #team="ngModel">
              <option *ngFor="let team of teams" [value]="team">{{team}}</option>
            </select>
          </div>
          <div class="form-group col-lg-2 col-sm-10">
            <label for="details">Details:</label>
            <textarea class="form-control" [(ngModel)]="ev.details" name="details" #details="ngModel" rows="5" id="details"></textarea>
          </div>
          <div class="btn btn-primary"(click)="addClicked(day)">Ok</div>
          <button class="btn btn-default"(click)="this.addFormIsOpen = false">Annuler</button>
        </form>
      </div>
    </div>
  </div>
  `
})
export class CalendarAddEventsComponent {
    
    constructor( private EvServ: EventsService){}    

    @Input() day: Date;
    @Input() refresh: Subject<any>;
    
    addFormIsOpen:boolean = false;

    teams = ['D1', 'D2','D3', 'B','Tous'];

    types = ['Training', 'Competition','Autre'];

    lieux = ['PBS91', 'PB94','CAMP','Paradise','Autre'];

    details = '';

    // instancie la classe event pour le binding avec le form, mais day n'est pas encore defini ici (?)
ev = new Event(this.day,'','titre',colors.red,this.types[0],this.teams[4],this.lieux[0],this.details);

    addClicked(day: Date) {
      this.ev.start = new Date(Date.UTC(this.day.getFullYear(), this.day.getMonth(), this.day.getDate(), 12, 0, 0));
      switch (this.ev.type){
        case "Training":this.ev.color = "yellow";
        break;
        case "Competition":this.ev.color = "red";
        break;
        case "Autre":this.ev.color = "blue";
        break;
      }
      console.log("addClicked:"+this.ev.start);
      this.EvServ.create(this.ev).subscribe(
        data=> {
          this.addFormIsOpen = false;
          this.EvServ.getAll();
        }
      );
      
    }
  
}



