import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ClientListPage } from './pages/client-list/client-list.page';
import { HomePagePage } from './pages/home-page/home-page.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
  },
  {
    path: 'clients',
    component: ClientListPage,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
