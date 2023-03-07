import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CylinderDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { CylinderService } from 'src/app/services/cylinder.service';

@Component({
  selector: 'app-admin-cylinder-list',
  templateUrl: './admin-cylinder-list.component.html',
  styleUrls: ['./admin-cylinder-list.component.scss']
})
export class AdminCylinderListComponent {


  cylinders: CylinderDTO[] = [];
  selectedCylinder: CylinderDTO = {
    cylinderId: 0,
    type: '',
    weight: 0,
    price: 0,
    strapColor: '',
  }

  constructor(
    private cylinderService: CylinderService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.cylinderService.getAll().subscribe(res => {
      this.cylinders = res as any[];
    })
  }
  cylinderByStrapColor(ngForm: NgForm) {
    console.log(ngForm)
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { strapColor } = ngForm.form.value;
    this.cylinderService.cylinderByStrapColor(strapColor).subscribe((res: any) => {
      this.cylinders = res as any[];
    }, this.alert.apiFail);
  }
  cylinderByType(ngForm: NgForm) {
    console.log(ngForm)
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { type } = ngForm.form.value;
    this.cylinderService.cylinderByType(type).subscribe((res: any) => {
      this.cylinders = res as any[];
    }, this.alert.apiFail);
  }
  cylinderByWeight(ngForm: NgForm) {
    console.log(ngForm)
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const { weight } = ngForm.form.value;
    this.cylinderService.cylinderByWeight(weight).subscribe((res: any) => {
      this.cylinders = res as any[];
    }, this.alert.apiFail);
  }
  onUpdateClick(data: CylinderDTO) {
    this.selectedCylinder = { ...data };
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: CylinderDTO = { ...ngForm.form.value, cylinderId: this.selectedCylinder.cylinderId };

    this.cylinderService.update(credentials, () => {
      this.ngOnInit();
      document.getElementById('closeModalBtn')?.click();
    });
  }
}
