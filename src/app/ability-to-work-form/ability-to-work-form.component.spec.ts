import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityToWorkFormComponent } from './ability-to-work-form.component';

describe('AbilityToWorkFormComponent', () => {
  let component: AbilityToWorkFormComponent;
  let fixture: ComponentFixture<AbilityToWorkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityToWorkFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityToWorkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
