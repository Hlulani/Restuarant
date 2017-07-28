import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { Component } from '@angular/core' ;
import { CategoriesComponent } from 'app/Categories/categories.component';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2/angularfire2';

import { environment } from '../environments/environment';


const  appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'categories', component: CategoriesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CategoriesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
