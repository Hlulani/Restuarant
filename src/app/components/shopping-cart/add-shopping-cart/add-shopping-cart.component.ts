import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuService } from 'app/services/menu.service';

@Component({
  selector: 'app-add-shopping-cart',
  templateUrl: './add-shopping-cart.component.html',
  styleUrls: ['./add-shopping-cart.component.scss']
})
export class AddShoppingCartComponent {

  menus: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase, private router: Router, private menuServices: MenuService) {
    this.menus = db.list('resturents/hrll3/menus/Beverages');

  }
  addToCart(menu: any) {
    console.log(menu);
    this.menuServices.add(menu);
  }



}


