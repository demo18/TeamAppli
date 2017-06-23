import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private AuthServ: AuthService) {}
  title = 'RNPPC Team Manager';
  isCollapsed = true;
  isLoggedIn;
  ngOnInit() {
    // this.AuthServ.isLogged().subscribe(
    //                   data => {
    //                     this.isLoggedIn = data;
    //                   });
  }
  test() {
    // this.AuthServ.isLogged().subscribe(
    //                    data => this.isLoggedIn = data);
  }
  onLogOutClick(){
    this.AuthServ.logout();
  }
}
