import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { CustomerLoginComponent } from "./pages/customer-login/customer-login.component";
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';

import { CustomerComponent } from './pages/layouts/customer/customer.component';

import { AuthGuard } from './guards/auth.guard';
import { CustomerGuard } from './guards/customer.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminRegisterComponent } from './pages/admin-register/admin-register.component';
import { CustomerBookingsComponent } from './pages/customer-bookings/customer-bookings.component';
import { CustomerGasBookingComponent } from './pages/customer-gas-booking/customer-gas-booking.component';
import { AdminBookingListComponent } from './pages/admin-booking-list/admin-booking-list.component';
// import { AdminNewBookingComponent } from './pages/admin-new-booking/admin-new-booking.component';
import { AdminCustomerListComponent } from './pages/admin-customer-list/admin-customer-list.component';
import { AdminCylinderListComponent } from './pages/admin-cylinder-list/admin-cylinder-list.component';
import { AdminNewCylinderComponent } from './pages/admin-new-cylinder/admin-new-cylinder.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';


const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'customer-login',
        component: CustomerLoginComponent
      },
      {
        path: 'customer-register',
        component: CustomerRegisterComponent
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },
      {
        path: 'admin-register',
        component: AdminRegisterComponent
      },

    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    canActivateChild: [AuthGuard, AdminGuard],
    children: [
      {
        path: '',
        component: AdminBookingListComponent
      },
      {
        path: 'bookings',
        component: AdminBookingListComponent
      },
      // {
      //   path: 'new-booking',
      //   component: AdminNewBookingComponent
      // },
      {
        path: 'customers',
        component: AdminCustomerListComponent
      },
      {
        path: 'cylinders',
        component: AdminCylinderListComponent
      },
      {
        path: 'new-cylinder',
        component: AdminNewCylinderComponent
      },

    ]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGuard, CustomerGuard],
    canActivateChild: [AuthGuard, CustomerGuard],
    children: [
      {
        path: '',
        component: CustomerBookingsComponent
      },
      {
        path: 'my-bookings',
        component: CustomerBookingsComponent
      },
      {
        path: 'book-gas',
        component: CustomerGasBookingComponent
      },

      {
        path: 'profile',
        component: CustomerProfileComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
