import {Component, OnInit} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthService } from './../_services/auth.service';
import { User } from './../users/user';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


declare const FB:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthServ: AuthService) {}

    user:User = new User();
    errorMessage: any;
    users : User[];
    
    ngOnInit() {
    }
}