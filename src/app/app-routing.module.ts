import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { CategoriesComponent } from 'app/Categories/categories.component';


export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'categories', component: CategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
