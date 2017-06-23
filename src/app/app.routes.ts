import { Routes } from '@angular/router';


import { CalendarRoutes } from './calendar/index';
import { UsersRoutes } from './users/users.routes'
import { StatsRoutes } from './stats/stats.routes'
import { ProfileRoutes } from './profile/profile.routes'
import { LoginRoutes } from './login/login.routes'

export const routes: Routes = [
  ...CalendarRoutes,
  ...UsersRoutes,
  ...StatsRoutes,
  ...ProfileRoutes,
  ...LoginRoutes
];
