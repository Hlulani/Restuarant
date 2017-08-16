import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  private menus: any[];

  constructor() {
    this.menus = [];
  }

  getMenus() {
    return this.menus;
  }

  add(menu: any) {
    this.menus.push(menu);
  }

}
