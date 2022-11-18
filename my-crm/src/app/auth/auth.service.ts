import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../classes/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin = false;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: Users) {
    console.log(user);

    return this.http.post<Users>(environment.urlAPI + 'register', user);
  }

  login(users: Users) {
    return this.http.post<Users>(environment.urlAPI + 'login', users).pipe(
      tap((data) => {
        console.log(data);
        this.isLogin = true;
      })
    );
  }

  getIsLogin() {
    return this.isLogin;
  }
}
