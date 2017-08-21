import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuService } from 'app/services/menu.service';
import { Menu } from 'app/models/Menu';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

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
  menu: any[];
  menus: any[];
  constructor(db: AngularFireDatabase, private router: Router, private menuServices: MenuService) {
    menuServices.cartObserver.subscribe((cart) => {
      this.menus = cart;
      this.totalPrice = cart.reduce((c, menu) => {
        return c + menu.price;
      }, 0);
    });
    menuServices.cartObserver.next(menuServices.cart);
  }

  ngOnInit() {
    console.log(this.menu);
  }
  onBackClicked() {
    this.router.navigate(['/add-shopping-cart']);
  }

  deleteProduct(menu) {
    this.menuServices.deleteProductFromCart(menu);
  }
  proceed() {
    this.router.navigate(['/complete-order']);
  }
  getTotalPrice() {
    const totalCost: Array<number> = [];
    const quantity: Array<number> = [];
    let intPrice: number;
    let intQuantity: number;
    this.menus.forEach((item: any) => {
      intPrice = item.price;
      intQuantity = item.quantity;
      totalCost.push(intPrice);
      quantity.push(intQuantity);
    });

    this.totalPrice = totalCost.length + 1;
    return this.totalPrice;
  }


}
