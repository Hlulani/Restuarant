import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OrderService {
  orders: FirebaseListObservable<any[]>;
  cart: any[];
  cartObserver: Subject<any[]>;
  cartObservable: Observable<any[]>;
  orderObserver: BehaviorSubject<any>;

  constructor(db: AngularFireDatabase) {
    this.orderObserver = new BehaviorSubject(null);

    db.list('resturents/hrll3/orders').subscribe(c => this.orderObserver.next(c));
    this.cart = [];
    this.cartObserver = new Subject<any[]>();
    this.cartObservable = Observable.create(this.cart);
  }
  getMenus(): Observable<any> {
    return this.orderObserver;
  }
  completeOrder(order: any) {
    this.cart.push(order);
    this.cartObserver.next(this.cart);
  }

}
