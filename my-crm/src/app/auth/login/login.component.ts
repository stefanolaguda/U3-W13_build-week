import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form!: NgForm;

  error: undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSumbit() {
    this.authService.login(this.form.value).subscribe(
      (userLogin) => {
        console.log(userLogin);
        this.error = undefined;
        this.router.navigate(['/clients']);
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
