import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CylinderDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { CylinderService } from 'src/app/services/cylinder.service';

@Component({
  selector: 'app-admin-new-cylinder',
  templateUrl: './admin-new-cylinder.component.html',
  styleUrls: ['./admin-new-cylinder.component.scss']
})
export class AdminNewCylinderComponent {

  constructor(private cylinder: CylinderService, private alert: AlertService) { }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: CylinderDTO = { ...ngForm.form.value, cylinderId: 0 };
    this.cylinder.create(credentials);

  }
}
