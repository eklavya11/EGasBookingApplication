import { Injectable } from '@angular/core';
import { CylinderDTO } from '../interfaces';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CylinderService {

  constructor(
    private api: ApiService,
    private alert: AlertService
  ) { }

  getAll() {
    return this.api.get('/admin/getAll/cylinder');
  }
  cylinderByStrapColor(strapColor: any) {
    return this.api.get(`/admin/view-cylinder-by-strapColor/${strapColor}`);
  }
  cylinderByType(type: any) {
    return this.api.get(`/admin/view-cylinder-by-type/${type}`);
  }
  cylinderByWeight(weight: any) {
    return this.api.get(`/admin/view-cylinder-by-weight/${weight}`);
  }

  create(payload: CylinderDTO, callback?: () => void) {
    return this.api.post('/admin/insert-cylinder', payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Cylinder registration successful.')
    });
  }

  update(payload: CylinderDTO, callback?: () => void) {
    return this.api.put(`/admin/update-cylinder/${payload.cylinderId}`, payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Cylinder update successful.')
    });
  }

  surrender(payload: any, callback?: () => void) {
    return this.api.post(`/customer/insert-surrender-cylinder/${payload?.customer?.userId}`, payload).subscribe((res: any) => {
      if (callback) callback();
      this.alert.success('Cylinder surrender successful.')
    });
  }
}
