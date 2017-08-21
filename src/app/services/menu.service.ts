import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MenuService {

  // private menus: any[];
  menus: FirebaseListObservable<any[]>;
  cart: any[];
  cartObserver: Subject<any[]>;
  cartObservable: Observable<any[]>;

  private productAddedSource = new Subject<any>();


  productAdded$ = this.productAddedSource.asObservable();

  constructor(db: AngularFireDatabase) {
    this.menus = db.list('resturents/hrll3/menus/Beverages');
    this.cart = [];
    this.cartObserver = new Subject<any[]>();
    this.cartObservable = Observable.create(this.cart);
  }

  getMenus() {
    return this.menus;
  }

  add(menu: any) {
    // this.cart
    this.cart.push(menu);
    this.cartObserver.next(this.cart);
  }

  deleteProductFromCart(menu: any) {
    const reduced = this.cart.reduce((prev, curr) => {
      if (curr.$key === menu.$key && prev.seen === false) {
        prev.seen = true;
      } else {
        prev.cart.push(curr);
      }
      return prev;
    }, { seen: false, cart: [] });

    this.cart = reduced.cart;
    this.cartObserver.next(this.cart);
  }
}
