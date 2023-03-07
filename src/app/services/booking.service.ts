import { Injectable } from '@angular/core';
import { GasBookingDto } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }
  create(customerId: number, payload: GasBookingDto, callback?: () => void) {
    return this.api.post(`/customer/insert-gasbooking/${customerId}`, payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Booking registration successful.')
    }, this.alert.apiFail2);
  }

  delete(gasBookingId: number, callback?: () => void) {
    return this.api.delete(`/admin/delete-gasbooking/${gasBookingId}`).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Gas booking cancellation successful.')
    }, this.alert.apiFail);
  }

  getMyBooking(customerId: number) {
    return this.api.get(`/customer/get-bill/${customerId}`);
  }
  getByDate(startDate: string, endDate: string) {
    return this.api.get(`/admin/admin/getAllBookingForDays?fromDate=${startDate}&toDate=${endDate}`);
  }

  update(gasBookingId: number, payload: any, callback?: () => void) {
    this.api.put(`/admin/update-gasbooking/${gasBookingId}`, payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('update successful.')
    }, this.alert.apiFail);
  }
}

