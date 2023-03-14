import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-admin-new-booking',
  templateUrl: './admin-new-booking.component.html',
  styleUrls: ['./admin-new-booking.component.css']
})
export class AdminNewBookingComponent {

  public customers: any[] = [];
  constructor(
    private bookingService: BookingService,
    private adminService: AdminService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(res => {
      this.customers = res as any[];
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const currentLoggedInUser = this.getSelectedCustomer(+ngForm.form.value.customerId);

    this.bookingService.create(currentLoggedInUser?.userId || 0, {
      bill: currentLoggedInUser?.cylinder.price || 0,
      bookingDate: (new Date()).toISOString().slice(0, 10),
      status: true,
      gasBookingId: 0,
    });
  }

  getSelectedCustomer(customerId: number) {
    return this.customers.filter(item => item.userId === customerId)[0];
  }
}
