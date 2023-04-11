import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStudentDialogComponent } from './add-new-student-dialog.component';

describe('AddNewStudentDialogComponent', () => {
  let component: AddNewStudentDialogComponent;
  let fixture: ComponentFixture<AddNewStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStudentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
