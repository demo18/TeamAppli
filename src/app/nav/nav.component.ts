import { Component, AfterContentInit  } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements AfterContentInit  {

  constructor(private AuthServ: AuthService) {}
  title = 'RNPPC Planning';
  isCollapsed = true;
  isLoggedIn:Observable<any>;
  
  ngAfterContentInit () {
  }
  // onLogOutClick(){
  //   this.AuthServ.logout();
  // }
}
