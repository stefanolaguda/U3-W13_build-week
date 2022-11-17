import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePagePage } from './pages/home-page/home-page.page';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientListPage } from './pages/client-list/client-list.page';
import { ModalAddClientComponent } from './components/modal-add-client/modal-add-client.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';
import { ListInvoiceComponent } from './components/list-invoice/list-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePagePage,
    LoginComponent,
    RegisterComponent,
    ClientListPage,
    ModalAddClientComponent,
    ListClientComponent,
    DetailClientComponent,
    ListInvoiceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
