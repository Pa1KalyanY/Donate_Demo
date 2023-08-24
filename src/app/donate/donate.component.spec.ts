import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DONATEComponent } from './donate.component';

describe('DONATEComponent', () => {
  let component: DONATEComponent;
  let fixture: ComponentFixture<DONATEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DONATEComponent]
    });
    fixture = TestBed.createComponent(DONATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
