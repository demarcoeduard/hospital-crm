import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsFormComponent } from './doctors-form.component';

describe('DoctorsFormComponent', () => {
  let component: DoctorsFormComponent;
  let fixture: ComponentFixture<DoctorsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsFormComponent]
    });
    fixture = TestBed.createComponent(DoctorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
