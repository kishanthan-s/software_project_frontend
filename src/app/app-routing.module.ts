import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveyComponent } from './delivey/delivey.component';
import { FarmerVeiwComponent } from './farmer/farmer-veiw/farmer-veiw.component';
import { HelpComponent } from './help/help.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { FarmerEditproductComponent } from './farmer/farmer-editproduct/farmer-editproduct.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:LandingPageComponent},
  {path: 'dashboard' , component:DashboardComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'admin_pannel' , component:AdminPannelComponent},
  {path: 'order' , component:OrderComponent},
  {path: 'delivery' , component:DeliveyComponent},

  {path: 'help' , component:HelpComponent},
  {path: 'contact_us' , component:ContactUsComponent},
  {path: 'about_us' , component:AboutUsComponent},
  {path: 'manage_profile' , component:ManageProfileComponent},
  {path: 'customer_login' , component:CustomerLoginComponent},
  {path: 'customer_signup' , component:CustomerSignupComponent},
  {path:'farmer',component:FarmerVeiwComponent,
children:[
 { path:'editproduct',component:FarmerEditproductComponent},

]
},

 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
