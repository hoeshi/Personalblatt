import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpouseFormComponent } from './spouse-form.component';

describe('SpouseFormComponent', () => {
  let component: SpouseFormComponent;
  let fixture: ComponentFixture<SpouseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpouseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
