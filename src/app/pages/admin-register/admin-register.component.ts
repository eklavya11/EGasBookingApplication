import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminRegisterDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {

  constructor(
    private alert: AlertService,
    private auth: AuthService,

  ) { }

  ngOnInit() {

  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form);
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }


    const credentials: AdminRegisterDTO = {
      ...(ngForm.form.value as AdminRegisterDTO),
      userId: 0,
    }


    this.auth.registerAdmin(credentials);
    ngForm.resetForm();

  }


}
