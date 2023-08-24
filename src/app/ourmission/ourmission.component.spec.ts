import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OURMISSIONComponent } from './ourmission.component';

describe('OURMISSIONComponent', () => {
  let component: OURMISSIONComponent;
  let fixture: ComponentFixture<OURMISSIONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OURMISSIONComponent]
    });
    fixture = TestBed.createComponent(OURMISSIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
