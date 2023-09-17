import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/models/user';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(private userService: UsersService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
    
  }

}
