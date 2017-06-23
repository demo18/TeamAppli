import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let log:boolean;
    this.authServ.isLoggedIn.subscribe(
      data =>{
        if(data){ 
          log = true; 
        }
        else{
          // Store the attempted URL for redirecting
          this.authServ.redirectUrl = url;
          // Navigate to the login page with extras
          this.router.navigate(['/login']);
          log = false;
        }
      }
    )
    console.log("checklogin : "+log);
    return log;
  }
}