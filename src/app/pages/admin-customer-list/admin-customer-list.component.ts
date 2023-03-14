import { Component } from '@angular/core';
import { CustomerRegisterDTO } from 'src/app/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './admin-customer-list.component.html',
  styleUrls: ['./admin-customer-list.component.css']
})
export class AdminCustomerListComponent {
  public customers: CustomerRegisterDTO[] = [];
  constructor(
    private adminService: AdminService,
    private auth: AuthService
  ) { }
  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(res => {
      this.customers = res as any[];
    });
  }

  onDelete(customerId: number) {
    this.auth.deleteCustomer(customerId, () => {
      this.ngOnInit();
    })
  }
}
