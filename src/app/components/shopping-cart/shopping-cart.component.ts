import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuService } from 'app/services/menu.service';
import { Menu } from 'app/models/Menu';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public menu_item: Menu;
  rowDataMainForm: any;
  changeDetectorRef: any;
  public totalPrice: number;
  public totalQuantity: number;
  menu: any;
  menus: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase, private router: Router, private menuServices: MenuService) {
    this.menus = db.list('resturents/hrll3/menus/Beverages');
  }

  ngOnInit() {
    this.menu = this.menuServices.getMenus();
    console.log(this.menu);
  }
  onBackClicked() {
    this.router.navigate(['/add-shopping-cart']);
  }
  getItems() {
    this.menus.subscribe(queriedItems => {
      console.log(queriedItems);
    });
  }
  removeItem() {
    console.log('deleted!');
    this.menus.remove().then(_ => console.log('deleted!'));
  }

  proceed() {
    this.router.navigate(['/complete-order']);
  }

}
