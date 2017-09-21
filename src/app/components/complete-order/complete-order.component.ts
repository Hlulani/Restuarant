
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss']
})

export class CompleteOrderComponent {


  constructor(private router: Router) {

  }

  closeButton() {
    this.router.navigate(['/']);
  }
}
