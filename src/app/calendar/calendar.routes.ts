import { Route } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import{ AuthGuard } from'./../_services/auth-guard.service'

export const CalendarRoutes: Route[] = [
    {
        path:'cal',
        component: CalendarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/cal',
        pathMatch: 'full'
    }
];