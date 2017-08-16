import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menus: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase, private router: Router) {
    this.menus = db.list('resturents/hrll3/menus/Beverages');
  }

  onBackClicked() {
    this.router.navigate(['/categories']);
  }
}


