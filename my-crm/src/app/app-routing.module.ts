import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list/client-list.page';
import { HomePagePage } from './pages/home-page/home-page.page';

const routes: Routes = [
  {
    path: '',
    component: HomePagePage,
  },
  {
    path: 'clients',
    component: ClientListPage
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
