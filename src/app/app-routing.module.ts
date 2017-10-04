import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components//welcome/welcome.component';
import { CategoriesComponent } from './components/Categories/categories.component';
import { MenuComponent } from './components//menu/menu.component';
import { AddShoppingCartComponent } from './components/shopping-cart/add-shopping-cart/add-shopping-cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CompleteOrderComponent } from './components/complete-order/complete-order.component';
import { AdminWelcomeComponent } from 'app/components/admin/admin-welcome/admin-welcome.component';
import { AdminDetailsComponent } from 'app/components/admin/admin-details/admin-details.component';
import { ProcessingOrdersComponent } from 'app/components/admin/processing-orders/processing-orders.component';

export const routes: Routes = [
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
