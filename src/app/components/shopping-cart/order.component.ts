import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuService } from 'app/services/menu.service';
import { Menu } from 'app/models/Menu';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { OrderService } from 'app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class OrderComponent implements OnInit {
  public totalPrice: number;
  order: any[];
  orders: any[];
  constructor(db: AngularFireDatabase, private router: Router, private orderServices: OrderService) {
    orderServices.cartObserver.subscribe((cart) => {
      this.orders = cart;
      this.totalPrice = cart.reduce((c, order) => {
        return c + order.price;
      }, 0);
    });
    orderServices.cartObserver.next(orderServices.cart);
  }

  ngOnInit() {
    console.log(this.order);
  }
  addToOrder(order: any) {
    // this.orderServices.add(order);
  }

}
