import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuService } from 'app/services/menu.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-add-shopping-cart',
  templateUrl: './add-shopping-cart.component.html',
  styleUrls: ['./add-shopping-cart.component.scss']
})
export class AddShoppingCartComponent {
  public totalPrice: number;
  public totalQuantity: number;
  menus: Observable<any>;
  constructor(private router: Router, private menuServices: MenuService) {
    this.menus = menuServices.getMenus();
    menuServices.cartObserver.subscribe((cart) => {
      this.totalQuantity = cart.length;
    });
    menuServices.cartObserver.next(menuServices.cart);

  }
  onBackClicked() {
    this.router.navigate(['/categories']);
  }
  addToCart(menu: any) {
    this.menuServices.add(menu);
    console.log("Test" + this.menus);
  }
  cartProceed() {
    this.router.navigate(['/shopping-cart']);
  }
}


