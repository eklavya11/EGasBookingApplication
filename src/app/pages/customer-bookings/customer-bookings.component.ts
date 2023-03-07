import { Component } from '@angular/core';
import { CustomerRegisterDTO } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-customer-bookings',
  templateUrl: './customer-bookings.component.html',
  styleUrls: ['./customer-bookings.component.scss']
})
export class CustomerBookingsComponent {
  public currentLoggedInUser: CustomerRegisterDTO | undefined;
  public bookings: any[] = [];

  constructor(
    private auth: AuthService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.auth.getLoggedInCustomer().subscribe(res => {
      this.currentLoggedInUser = res as CustomerRegisterDTO;
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(res));
      this.bookingService.getMyBooking(this.currentLoggedInUser.userId).subscribe(res => {
        this.bookings = res as any[];
      });
    });
  }

  onDelete(bookingId: number) {
    this.bookingService.delete(bookingId, () => {
      this.bookings = [];
    });
  }

}
