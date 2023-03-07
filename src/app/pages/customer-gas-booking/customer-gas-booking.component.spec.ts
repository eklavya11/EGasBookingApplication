import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGasBookingComponent } from './customer-gas-booking.component';

describe('CustomerGasBookingComponent', () => {
  let component: CustomerGasBookingComponent;
  let fixture: ComponentFixture<CustomerGasBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGasBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGasBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
