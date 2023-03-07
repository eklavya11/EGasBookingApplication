import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerRegisterDTO, CylinderDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { CylinderService } from 'src/app/services/cylinder.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent {
  cylinderList: CylinderDTO[] = [];
  public currentLoggedInUser: any;

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    private cylinderService: CylinderService,
  ) { }

  ngOnInit() {
    this.auth.getLoggedInCustomer().subscribe(res => {
      this.currentLoggedInUser = res as CustomerRegisterDTO;
      sessionStorage.setItem('LOGGED_IN_USER_DETAILS', JSON.stringify(res));

    });

    this.cylinderService.getAll().subscribe((res: any) => {
      this.cylinderList = res as CylinderDTO[];
    });
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm.form)
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    // const { accountNo, bankName, ifscNo, cylinderId, ...customerData } = ngForm.form.value;

    this.auth.updateCustomer(this.currentLoggedInUser, () => {
      this.ngOnInit();
    });


  }

  getCylinderById(cId: number) {
    return this.cylinderList.filter(item => item.cylinderId === cId)[0];
  }

}
