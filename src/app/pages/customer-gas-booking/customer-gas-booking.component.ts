import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerRegisterDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { BookingService } from 'src/app/services/booking.service';
import { CylinderService } from 'src/app/services/cylinder.service';

@Component({
  selector: 'app-customer-gas-booking',
  templateUrl: './customer-gas-booking.component.html',
  styleUrls: ['./customer-gas-booking.component.css']
})
export class CustomerGasBookingComponent {

  public currentLoggedInUser: CustomerRegisterDTO | undefined;
  public disableBtn = false;
  constructor(private alert: AlertService,
    private auth: AuthService,
    private bookingService: BookingService,
    private cylinderService: CylinderService
  ) { }

  ngOnInit() {
    this.auth.getLoggedInCustomer().subscribe(res => {
      console.log(res);
      this.currentLoggedInUser = res as CustomerRegisterDTO;
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(res));

    });
  }

  onSubmit() {

    this.disableBtn = true;

    this.bookingService.create(this.currentLoggedInUser?.userId || 0, {
      bill: this.currentLoggedInUser?.cylinder.price || 0,
      bookingDate: (new Date()).toISOString().slice(0, 10),
      status: true,
      gasBookingId: 0,
    }, () => {
      this.disableBtn = false;
    });
  }

  onSurrender() {
    this.disableBtn = true;
    this.cylinderService.surrender({
      customer: this.currentLoggedInUser,
      cylinder: this.currentLoggedInUser?.cylinder,
      surrendarDate: (new Date()).toISOString().slice(0, 10),
      surrenderId: 0
    }, () => {
      this.disableBtn = false;
    });
  }
}
