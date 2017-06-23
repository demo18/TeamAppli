import { Injectable,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { UsersService } from './users.service';
import { User } from './../users/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare const FB:any;

@Injectable()
export class AuthService {

  constructor(private UsersServ: UsersService,private router: Router,private zone: NgZone) {
    FB.init({
            //appId      : '1169296846524359', //TeamAppli local
            appId      : '1867884153480788', //TeamAppli 
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.5
        });

  }

  user:User = new User();
  currentUser:User = new User();
  bSubject = new BehaviorSubject<boolean>(false); 
  isLoggedIn = this.bSubject.asObservable();
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(response) {
    // zone.run pour que le subject soit update dans les view avec | async.
    // cette methode est appelé par l'api FB? donc hors de la zone ng?
    this.UsersServ.getByFbId(response.id).subscribe(
        data => {
          this.zone.run(() => {   
            if(Object.keys(data.users).length == 0){   //REGISTRATION
                this.user.fbID = response.id;
                this.user.fbName = response.name;
                this.UsersServ.create(this.user).subscribe(
                    data => {                          //connexion apres registration
                        console.log('Profile créé' +data);
                        this.UsersServ.getById(data).subscribe(
                            data=>{
                                console.log('connexion '+data);
                                this.currentUser = data;
                                this.bSubject.next(true);
                                this.router.navigate(['/']);
                            }
                        )
                    },
                    error =>  console.log(<any>error));
            }
            else{                                       //CONNEXION
                console.log("bonjour "+response.name);
                this.bSubject.next(true);
                //this.isLoggedIn = true;
                this.currentUser = data.users[0];
                this.router.navigate(['/']);
            }
            });
        },
        error =>  console.log(<any>error));
    
  }

  logout(): void {
    this.bSubject.next(false);
    //this.isLoggedIn = false;
  }
  onFacebookLoginClick() {
        FB.login(response => {
            this.statusChangeCallback(response)
        });
        // bypass FB pour test 
        //this.AuthServ.login(1);
    };

  statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            let that = this;
            FB.api('/me', function(response) {
                that.login(response);
                console.log('Successful login for: ' + response.id);
            });
            
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {
            
        }else {
            
        }
    };
}