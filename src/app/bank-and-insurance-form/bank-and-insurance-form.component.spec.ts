import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAndInsuranceFormComponent } from './bank-and-insurance-form.component';

describe('BankAndInsuranceFormComponent', () => {
  let component: BankAndInsuranceFormComponent;
  let fixture: ComponentFixture<BankAndInsuranceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAndInsuranceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAndInsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
