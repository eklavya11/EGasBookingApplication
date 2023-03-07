import { Injectable } from '@angular/core';
import { BankDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }

  getAll() {
    return this.api.get('/bank/bankLis');
  }
  
  create(payload: BankDTO, callback?: () => void) {
    return this.api.post('/bank/insertBank', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Bank registration successful.')
    }, this.alert.apiFail);
  }

  update(payload: BankDTO, callback?: () => void) {
    return this.api.post('/bank/updateBank', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Bank update successful.')
    }, this.alert.apiFail);
  }
}
