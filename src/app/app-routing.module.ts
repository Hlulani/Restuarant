import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { CategoriesComponent } from 'app/Categories/categories.component';
import { MenuComponent } from 'app/menu/menu.component';


export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
