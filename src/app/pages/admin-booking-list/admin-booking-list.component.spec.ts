import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookingListComponent } from './admin-booking-list.component';

describe('AdminBookingListComponent', () => {
  let component: AdminBookingListComponent;
  let fixture: ComponentFixture<AdminBookingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBookingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
