import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditFormComponent } from './department-edit-form.component';

describe('DepartmentEditFormComponent', () => {
  let component: DepartmentEditFormComponent;
  let fixture: ComponentFixture<DepartmentEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
