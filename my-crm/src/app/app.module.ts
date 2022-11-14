import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePagePage } from './pages/home-page/home-page.page';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomePagePage],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
