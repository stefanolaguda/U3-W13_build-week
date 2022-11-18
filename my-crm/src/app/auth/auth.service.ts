import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: Users) {
    console.log(user);

    return this.http.post<Users>(environment.urlAPI + 'register', user);
  }

  login(users: Users) {
    return this.http.post(environment.urlAPI + 'login', users);
  }
}
