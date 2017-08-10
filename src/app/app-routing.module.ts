import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components//welcome/welcome.component';
import { CategoriesComponent } from './components//Categories/categories.component';
import { MenuComponent } from './components//menu/menu.component';
import { AddShoppingCartComponent } from './components/shopping-cart/add-shopping-cart/add-shopping-cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add-shopping-cart', component: AddShoppingCartComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
