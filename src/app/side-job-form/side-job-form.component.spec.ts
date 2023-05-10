import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideJobFormComponent } from './side-job-form.component';

describe('SideJobFormComponent', () => {
  let component: SideJobFormComponent;
  let fixture: ComponentFixture<SideJobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideJobFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
