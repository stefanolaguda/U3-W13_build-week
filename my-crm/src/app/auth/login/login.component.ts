import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form!: NgForm;

  error: undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSumbit() {}
}
