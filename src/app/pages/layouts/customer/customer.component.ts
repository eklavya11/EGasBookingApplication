import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor(private router: Router) { }
  onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
