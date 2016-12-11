import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { CalendarMonthViewComponent } from './components/month/calendarMonthView.component';
import { CalendarEventActionsComponent } from './components/common/calendarEventActions.component';
import { CalendarEventTitleComponent } from './components/common/calendarEventTitle.component';
import { CalendarMonthCellComponent } from './components/month/calendarMonthCell.component';
import { CalendarOpenDayEventsComponent } from './components/month/calendarOpenDayEvents.component';
import { CalendarTooltipWindowComponent, CalendarTooltipDirective } from './directives/calendarTooltip.directive';
import { CalendarDate } from './pipes/calendarDate.pipe';
import { CalendarEventTitle as CalendarEventTitlePipe } from './pipes/calendarEventTitle.pipe';
import { CalendarEventTitle as CalendarEventTitleProvider } from './providers/calendarEventTitle.provider';
import { CalendarDateFormatter } from './providers/calendarDateFormatter.provider';
import { CalendarComponent } from './calendar.component';
import { CalendarAddEventsComponent } from './components/common/calendarAddEvents.component';


@NgModule({
  declarations: [
    CalendarMonthViewComponent,
    CalendarEventActionsComponent,
    CalendarEventTitleComponent,
    CalendarMonthCellComponent,
    CalendarOpenDayEventsComponent,
    CalendarTooltipWindowComponent,
    CalendarTooltipDirective,
    CalendarDate,
    CalendarEventTitlePipe,
    CalendarComponent,
    CalendarAddEventsComponent
  ],
  imports: [CommonModule, ResizableModule],
  exports: [CalendarMonthViewComponent, CalendarDate],
  entryComponents: [CalendarTooltipWindowComponent]
})
export class CalendarModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CalendarModule,
      providers: [
        CalendarEventTitleProvider,
        CalendarDateFormatter
      ]
    };
  }

}