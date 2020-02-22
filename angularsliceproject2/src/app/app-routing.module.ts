import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent} from './login/login.component';
import { CreateAcctComponent} from'./create-acct/create-acct.component';
const routes: Routes = [
  {path : "create", component : CreateAcctComponent},
  {path : "checkout", component : CheckoutComponent},
  {path : "home", component : HomeComponent},
  {path : "manager", component : ManagerComponent},
  {path : "order", component : OrderComponent},
  {path : "contact", component : ContactComponent},
  {path : "login", component : LoginComponent},
  {path : "**", component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
