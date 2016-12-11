import { Component } from '@angular/core';
import { EventsService } from './calendar/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventsService]
})
export class AppComponent {
  title = 'app works!';
}
