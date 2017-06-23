import { Route } from '@angular/router';
import { ProfileComponent } from './profile.component';
import{ AuthGuard } from'./../_services/auth-guard.service'

export const ProfileRoutes: Route[] = [
    {
        path:'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
];