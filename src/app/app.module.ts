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



const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add-shopping-cart', component: AddShoppingCartComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'complete-order', component: CompleteOrderComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CategoriesComponent,
    MenuComponent,
    AddShoppingCartComponent,
    ShoppingCartComponent,
    CompleteOrderComponent
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
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
