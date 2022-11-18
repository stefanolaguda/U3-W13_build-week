import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  // declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  // exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
