import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbookingComponent } from './carbooking.component';

describe('CarbookingComponent', () => {
  let component: CarbookingComponent;
  let fixture: ComponentFixture<CarbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbookingComponent]
    });
    fixture = TestBed.createComponent(CarbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
