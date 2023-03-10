import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyViewComponent } from './competency-view.component';

describe('CompetencyViewComponent', () => {
  let component: CompetencyViewComponent;
  let fixture: ComponentFixture<CompetencyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
