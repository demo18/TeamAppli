import { Component, OnInit } from '@angular/core';
import { UsersService } from './../_services/users.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UsersServ: UsersService) { }

  errorMessage : any;
  users : User[];
  selectedUser : User;
  ngOnInit() {
    this.UsersServ.getAll().subscribe(
                       users => this.users = users.users,
                       error =>  this.errorMessage = <any>error);
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
