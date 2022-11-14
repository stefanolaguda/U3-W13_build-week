import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: Users[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Users[]>(environment.urlAPI + 'users');
  }

  // signUp(user: Users) {
  //   return this.http.post(environment.urlAPI + 'users', user);
  // }
}
