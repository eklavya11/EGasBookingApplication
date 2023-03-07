import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankDTO, CylinderDTO, CustomerRegisterDTO } from 'src/app/interfaces';
// import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { BankService } from 'src/app/services/bank.service';
import { CylinderService } from 'src/app/services/cylinder.service';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent {

  cylinderList: CylinderDTO[] = [];
  bankList: BankDTO[] = [];

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    private bankService: BankService,
    private cylinderService: CylinderService
  ) { }

  ngOnInit() {
    this.cylinderService.getAll().subscribe((res: any) => {
      this.cylinderList = res as CylinderDTO[];
    });
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }

    const { accountNo, bankName, ifscNo, cylinderId, ...customerData } = ngForm.form.value;


    const credentials: CustomerRegisterDTO = {
      ...(customerData as CustomerRegisterDTO),
      bank: {
        bankId: 0,
        accountNo,
        bankName,
        ifscNo,
        addessLine1: customerData.addessLine1,
        addessLine2: customerData.addessLine2,
        city: customerData.city,
        country: customerData.country,
        state: customerData.state,
        zipCode: customerData.zipCode,
      },
      cylinder: this.getCylinderById(+cylinderId),
      userId: 0,
    }


    this.auth.registerCustomer(credentials);
    ngForm.resetForm();

  }

  getCylinderById(cId: number) {
    return this.cylinderList.filter(item => item.cylinderId === cId)[0];
  }

}
