import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCylinderComponent } from './admin-new-cylinder.component';

describe('AdminNewCylinderComponent', () => {
  let component: AdminNewCylinderComponent;
  let fixture: ComponentFixture<AdminNewCylinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewCylinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNewCylinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
