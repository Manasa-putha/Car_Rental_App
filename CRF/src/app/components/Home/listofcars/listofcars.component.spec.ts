import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcarsComponent } from './listofcars.component';

describe('ListofcarsComponent', () => {
  let component: ListofcarsComponent;
  let fixture: ComponentFixture<ListofcarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofcarsComponent]
    });
    fixture = TestBed.createComponent(ListofcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
