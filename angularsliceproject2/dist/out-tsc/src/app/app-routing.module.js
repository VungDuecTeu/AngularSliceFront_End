import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
const routes = [
    { path: "checkout", component: CheckoutComponent },
    { path: "home", component: HomeComponent },
    { path: "manager", component: ManagerComponent },
    { path: "order", component: OrderComponent },
    { path: "contact", component: ContactComponent },
    { path: "**", component: HomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map