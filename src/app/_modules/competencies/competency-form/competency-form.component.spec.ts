import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyFormComponent } from './competency-form.component';

describe('CompetencyFormComponent', () => {
  let component: CompetencyFormComponent;
  let fixture: ComponentFixture<CompetencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
