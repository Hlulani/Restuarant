import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components//welcome/welcome.component';
import { Component } from '@angular/core';
import { CategoriesComponent } from './components/Categories/categories.component';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2/angularfire2';

import { environment } from '../environments/environment';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';
import { AddShoppingCartComponent } from './components/shopping-cart/add-shopping-cart/add-shopping-cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CompleteOrderComponent } from './components/complete-order/complete-order.component';
import { OrderComponent } from 'app/components/shopping-cart/order.component';
import { OrderService } from 'app/services/order.service';
import { AdminWelcomeComponent } from 'app/components/admin/admin-welcome/admin-welcome.component';
import { AdminDetailsComponent } from 'app/components/admin/admin-details/admin-details.component';
import { ProcessingOrdersComponent } from 'app/components/admin/processing-orders/processing-orders.component';
import { ProcessOrderService } from "app/services/process-orders.service";



const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add-shopping-cart', component: AddShoppingCartComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'complete-order', component: CompleteOrderComponent },
  { path: 'admin-welcome', component: AdminWelcomeComponent },
  { path: 'admin-details', component: AdminDetailsComponent },
  { path: 'processing-orders', component: ProcessingOrdersComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CategoriesComponent,
    MenuComponent,
    AddShoppingCartComponent,
    ShoppingCartComponent,
    CompleteOrderComponent,
    OrderComponent,
    AdminWelcomeComponent,
    AdminDetailsComponent,
    ProcessingOrdersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [MenuService, OrderService, ProcessOrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
