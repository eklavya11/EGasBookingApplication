import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewBookingComponent } from './admin-new-booking.component';

describe('AdminNewBookingComponent', () => {
  let component: AdminNewBookingComponent;
  let fixture: ComponentFixture<AdminNewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
