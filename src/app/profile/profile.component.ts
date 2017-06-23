import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { UsersService } from './../_services/users.service';
import { AlertService } from './../_services/alert.service';
import { User } from './../users/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private AuthServ: AuthService,private UsersServ: UsersService,private AlertServ: AlertService) { }

  errorMessage: any;
  currentUser : User;
  teams = ['D1', 'D2','D3', 'B','Tous'];
  types = ['Joueur', 'Coach','Autre'];
  onClick(){
    this.UsersServ.update(this.currentUser.id,this.currentUser).subscribe(
      data=>{
        this.AlertServ.success('Profile sauvegardé', false);
      },
      error=> console.log(<any>error)
    );
  }
  ngOnInit() {
    this.currentUser = this.AuthServ.currentUser;
  }

}
