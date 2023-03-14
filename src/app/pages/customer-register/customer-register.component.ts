import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankDTO, CylinderDTO, CustomerRegisterDTO } from 'src/app/interfaces';
// import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { BankService } from 'src/app/services/bank.service';
import { CylinderService } from 'src/app/services/cylinder.service';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, Validators } from '@angular/forms';






@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {

  bank: BankDTO = new BankDTO();
  customer: CustomerRegisterDTO = new CustomerRegisterDTO();

  cylinderList: CylinderDTO[] = [];
  bankList: BankDTO[] = [];
  pwd = "";
  confirmpwd = "";
 

  constructor(
    private api: ApiService,
    private alert: AlertService,
    private auth: AuthService,
    private bankService: BankService,
    private cylinderService: CylinderService
  ) { }

  // registerCustomer(data: CustomerRegisterDTO) {
  //   console.log(JSON.stringify(data));
  //   this.api.post('/customer/insert-customer', data).subscribe((res: any) => {
  //     this.alert.success('Registration successful.')
  //   }, this.alert.apiFail);
  // }

  

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

    this.api.post('/customer/insert-customer', credentials).subscribe((res: any) => {
      this.alert.success('Registration successful.')
      ngForm.resetForm();
    }, this.alert.apiFail);
    // this.registerCustomer(credentials);
    
    
    
    // ngForm.resetForm();

  }

  getCylinderById(cId: number) {
    return this.cylinderList.filter(item => item.cylinderId === cId)[0];
  }

}
