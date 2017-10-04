import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ProcessOrderService } from 'app/services/process-orders.service';

@Component({

  selector: 'app-processing-orders',
  templateUrl: './processing-orders.component.html',
  styleUrls: ['./processing-orders.component.scss']

})
export class ProcessingOrdersComponent {
  orders: FirebaseListObservable<any[]>;
  isCollapsed = false;
  order: any[];

  constructor(db: AngularFireDatabase, private router: Router, private processOrderService: ProcessOrderService) {
    this.orders = db.list('resturents/hrll3/orders');
    console.log('test')
    // processOrderService.cartObserver.next(processOrderService.cart);
  }

  orderDetails() {
    this.router.navigate(['']);
  }
  deleteProduct(order) {

    this.processOrderService.deleteProductFromOrder(order);
  }
}
