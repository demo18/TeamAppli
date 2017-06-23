import { Route } from '@angular/router';
import { StatsComponent } from './stats.component';
import{ AuthGuard } from'./../_services/auth-guard.service'

export const StatsRoutes: Route[] = [
    {
        path:'stats',
        component: StatsComponent,
        canActivate: [AuthGuard]
    }
];