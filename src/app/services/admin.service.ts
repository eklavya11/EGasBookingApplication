import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }



  getAllCustomers() {
    return this.api.get(`/admin/view-all-customers`);
  }
}
