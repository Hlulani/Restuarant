import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent {

  constructor(private router: Router) {

  }
  processOrder() {
    console.log('test');
    this.router.navigate(['./processing-orders']);
  }
}
