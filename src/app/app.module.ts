import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavibarComponent } from './navibar/navibar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileadminComponent } from './profileadmin/profileadmin.component';
import { ProfilefarmerComponent } from './profilefarmer/profilefarmer.component';
import { ProfilecustomerComponent } from './profilecustomer/profilecustomer.component';
import { ProfilecourierComponent } from './profilecourier/profilecourier.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavibarComponent,
    LoginComponent,
    SignupComponent,
    ProfileadminComponent,
    ProfilefarmerComponent,
    ProfilecustomerComponent,
    ProfilecourierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
