import { Http, Headers } from '@angular/http';
export class MenuService {

  private menu: any;

  constructor(private http: Http) {
  }

  getMenus() {
    return this.menu;
  }
}
