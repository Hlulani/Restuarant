import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuService } from 'app/services/menu.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  rowDataMainForm: any;
  changeDetectorRef: any;

  menus: FirebaseListObservable<any[]>;
  menu: any[];
  constructor(db: AngularFireDatabase, private router: Router, private menuServices: MenuService) {
    this.menus = db.list('resturents/hrll3/menus/Beverages');

  }

  ngOnInit() {
    this.menu = this.menuServices.getMenus();
    console.log(this.menu);
  }

  removeRow(rowNumber: number) {
    const row = this.menu.splice(rowNumber, 1);
  }
}


