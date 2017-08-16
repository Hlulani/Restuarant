import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase, private router: Router) {
    this.items = db.list('resturents/hrll3/categories');
  }

  selectCategories() {
    this.router.navigate(['/add-shopping-cart']);
  }
  onBackClicked() {
    this.router.navigate(['/menu']);
  }
}
