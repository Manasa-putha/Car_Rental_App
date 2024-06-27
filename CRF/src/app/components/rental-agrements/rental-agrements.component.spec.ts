import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalAgrementsComponent } from './rental-agrements.component';

describe('RentalAgrementsComponent', () => {
  let component: RentalAgrementsComponent;
  let fixture: ComponentFixture<RentalAgrementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalAgrementsComponent]
    });
    fixture = TestBed.createComponent(RentalAgrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
