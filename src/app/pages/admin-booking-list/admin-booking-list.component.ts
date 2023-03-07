import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GasBookingDto } from 'src/app/interfaces';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-admin-booking-list',
  templateUrl: './admin-booking-list.component.html',
  styleUrls: ['./admin-booking-list.component.scss']
})
export class AdminBookingListComponent {
  public bookings: any[] = [];
  public customers: any[] = [];
  public selectedBooking: any = {
    bill: 0,
    customerId: '',
    gasBookingId: 0,
    deliveryDate: '',
    status: true,
  }

  constructor(
    private bookingService: BookingService,
    private alert: AlertService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe(res => {
      this.customers = res as any[];
    });
  }

  filterByCustomerId(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { customerId } = ngForm.form.value;
    this.bookingService.getMyBooking(+customerId).subscribe(res => {
      this.bookings = res as any[];
    });

  }
  filterByDate(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { fromDate, toDate } = ngForm.form.value;
    this.bookingService.getByDate(fromDate, toDate).subscribe(res => {
      this.bookings = res as any[];
    });
  }

  onDelete(bookingId: number) {
    this.bookingService.delete(bookingId, () => {
      this.bookings = [];
    });
  }

  onUpdate(booking: any) {
    this.selectedBooking = { ...booking };
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    let { gasBookingId, customer, ...filteredData } = this.selectedBooking;
    filteredData = { ...filteredData, customerId: customer.userId };
    this.bookingService.update(gasBookingId, filteredData, () => this.ngOnInit());

  }
}
