import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Define API
  apiURL = environment.pickupAPIRoot;
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options

  // HttpClient API get() method => Fetch user list
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiURL + '/users');
  }

  updateUserPhoneNumber(userId: number, phoneNumber: string) {
    const data = {
      'phoneNumber': phoneNumber
    };
    return this.http.post(this.apiURL + `/phones/user_id/${userId}`, data);
  }

  createUser(user: User) {
    return this.http.post(this.apiURL + '/users', user);
  }

  deleteUser(userId: number) {
    return this.http.delete(this.apiURL + `/users/${userId}`);
  }
}
