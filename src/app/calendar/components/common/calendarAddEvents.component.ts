import { Component, Input,Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { CalendarEvent,MonthViewDay,EventAction } from 'calendar-utils';
import { myEvent } from './../../events';
import { EventsService } from './../../events.service';


export const colors: any = {
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

  const actions: EventAction[] = [{
    label: '<i class="fa fa-fw fa-pencil"></i>',
    onClick: ({event}: {event: myEvent}): void => {
      console.log('Edit event', event);
    }
  }, {
    label: '<i class="fa fa-fw fa-times"></i>',
    onClick: ({event}: {event: myEvent}): void => {
      //this.EvServ.delEvents(event);
      //this.events = this.events.filter(iEvent => iEvent !== event);
    }
  }];



@Component({
  selector: 'mwl-calendar-add-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="!this.addFormIsOpen" class="btn btn-primary"(click)="this.addFormIsOpen = true">+</div>

      <div *ngIf="this.addFormIsOpen"class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Ajout date</h3>
          </div>
          <div class="panel-body">
            <div class="col-lg-2 col-sm-10">
              <label for="EventType">Type</label>
              <select id="EventType" class="form-control">
                <option value="">Training</option>
                <option value="">Competition</option>
              </select>
              <label for="TeamType">Equipes</label>
              <select id="TeamType" class="form-control">
                <option value="d1">D1</option>
                <option value="d2">D2</option>
                <option value="d3">D2</option>
                <option value="b">B</option>
                <option selected="selected" value="all">Tous</option>
              </select>
            </div>
          <div class="btn btn-primary"(click)="addClicked(day)">Ok</div>
          <div class="btn btn-default"(click)="this.addFormIsOpen = false">Annuler</div>
        </div>
      </div>
  `
})
export class CalendarAddEventsComponent {
    
    constructor( private EvServ: EventsService){}    
    
    addFormIsOpen:boolean = false;

   @Input() day: MonthViewDay;

   addClicked(day: MonthViewDay) {
    console.log("addClicked:"+day.date);
    var date = {
    users:["added"],
    start: day.date,
    end: day.date,
    title: 'added',
    color: colors.red
    //actions: this.actions
    };
    //this.events.push(date);
    //this.EvServ.addEvents(date);
    //this.refresh.next();
    this.addFormIsOpen = false;
  }

  
  
}

