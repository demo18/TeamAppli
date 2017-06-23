import { Route } from '@angular/router';
import { UsersComponent } from './users.component';
import{ AuthGuard } from'./../_services/auth-guard.service'

export const UsersRoutes: Route[] = [
    {
        path:'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    }
];