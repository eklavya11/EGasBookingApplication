import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { CustomerComponent } from './pages/layouts/customer/customer.component';
import { CylinderService } from './services/cylinder.service';
import { BankService } from './services/bank.service';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { CustomerGasBookingComponent } from './pages/customer-gas-booking/customer-gas-booking.component';
import { CustomerBookingsComponent } from './pages/customer-bookings/customer-bookings.component';
import { BookingService } from './services/booking.service';
import { AdminBookingListComponent } from './pages/admin-booking-list/admin-booking-list.component';
import { AdminNewBookingComponent } from './pages/admin-new-booking/admin-new-booking.component';
import { AdminCustomerListComponent } from './pages/admin-customer-list/admin-customer-list.component';
import { AdminCylinderListComponent } from './pages/admin-cylinder-list/admin-cylinder-list.component';
import { AdminNewCylinderComponent } from './pages/admin-new-cylinder/admin-new-cylinder.component';
import { AdminService } from './services/admin.service';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    HomeComponent,
    BasicComponent,
    AdminComponent,
    CustomerComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    CustomerGasBookingComponent,
    CustomerBookingsComponent,
    AdminBookingListComponent,
    AdminNewBookingComponent,
    AdminCustomerListComponent,
    AdminCylinderListComponent,
    AdminNewCylinderComponent,
    CustomerProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [
    AlertService,
    ApiService,
    AuthService,
    CylinderService,
    BankService,
    BookingService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
