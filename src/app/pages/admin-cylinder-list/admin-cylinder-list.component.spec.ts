import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCylinderListComponent } from './admin-cylinder-list.component';

describe('AdminCylinderListComponent', () => {
  let component: AdminCylinderListComponent;
  let fixture: ComponentFixture<AdminCylinderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCylinderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCylinderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
