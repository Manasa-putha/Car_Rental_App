import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbookedComponent } from './carbooked.component';

describe('CarbookedComponent', () => {
  let component: CarbookedComponent;
  let fixture: ComponentFixture<CarbookedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarbookedComponent]
    });
    fixture = TestBed.createComponent(CarbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
