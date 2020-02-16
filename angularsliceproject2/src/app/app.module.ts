import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CheckouttableComponent } from './checkout/checkouttable/checkouttable.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
//import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    OrderComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    CheckouttableComponent,
    LoginComponent
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
