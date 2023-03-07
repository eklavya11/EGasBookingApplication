import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminRegisterDTO, CustomerRegisterDTO, LoginDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private alert: AlertService, private router: Router) { }

  registerCustomer(data: CustomerRegisterDTO) {
    console.log(JSON.stringify(data));
    this.api.post('/customer/insert-customer', data).subscribe((res: any) => {
      this.alert.success('Registration successful.')
    }, this.alert.apiFail);
  }
  registerAdmin(data: AdminRegisterDTO) {
    this.api.post('/admin/insertadmin', data).subscribe((res: any) => {
      this.alert.success('Registration successful.')
    }, this.alert.apiFail);
  }

  loginCustomer(data: LoginDTO) {
    this.api.post('/validate/customer/login', data).subscribe((res: any) => {
      if (!res?.response?.email) {
        this.alert.error("Wrong credentials");
        return;
      }

      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_ROLE', 'CUSTOMER');
      sessionStorage.setItem('SESSION_USER_ID', res?.response?.id);
      this.router.navigateByUrl("/customer")
    }, this.alert.apiFail1);
  }
  loginAdmin(data: LoginDTO) {
    this.api.post('/admin/validate/admin/login', data).subscribe((res: any) => {
      if (!res?.response?.email) {
        this.alert.error("Wrong credentials");
        return;
      }
      sessionStorage.setItem('SESSION_USERNAME', data.email);
      sessionStorage.setItem('SESSION_ROLE', 'ADMIN');
      sessionStorage.setItem('SESSION_USER_ID', res?.response?.id);
      this.router.navigateByUrl("/admin")
    }, this.alert.apiFail1);
  }

  getLoggedInCustomer() {
    if (sessionStorage.getItem("LOGGED_IN_USER_DETAILS")) {
      return new Observable((observer) => {
        try {
          const data = JSON.parse(sessionStorage.getItem("LOGGED_IN_USER_DETAILS") || '');
          observer.next(data);
        } catch (e) {
          observer.error(e);
        }
      })
    }
    const userId = sessionStorage.getItem('SESSION_USER_ID');
    return this.api.get(`/admin/view-customer-by-id/${userId}`);
  }

  updateCustomer(credentials: CustomerRegisterDTO, callback?: () => void) {
    this.api.put(`/customer/update-customer/${credentials.userId}`, credentials).subscribe(res => {
      this.alert.success('Update successful.');
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(res));
      if (callback) callback();
    });
  }

  deleteCustomer(customerId: number, callback?: () => void) {
    this.api.delete(`/admin/delete-customer/${customerId}`).subscribe(res => {
      this.alert.success('delete successful.');
      if (callback) callback();
    });
  }

  isLoggedIn() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_USERNAME'))
      return true;
    return false;
  }

  isAdmin() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'ADMIN')
      return true;
    return false;
  }

  isCustomer() {
    if (sessionStorage.getItem('SESSION_ROLE') && sessionStorage.getItem('SESSION_ROLE') === 'CUSTOMER')
      return true;
    return false;
  }

}
