import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminRegisterDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {

  admin: AdminRegisterDTO = new AdminRegisterDTO();

  pwd = "";
  confirmpwd = "";

  constructor(
    private api: ApiService,
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

    this.api.post('/admin/registeradmin', credentials).subscribe((res: any) => {
      this.alert.success('Registration successful.')
      ngForm.resetForm();
    }, this.alert.apiFail);

    // this.auth.registerAdmin(credentials);
    // ngForm.resetForm();

  }


}
