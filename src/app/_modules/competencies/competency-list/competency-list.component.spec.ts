import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyListComponent } from './competency-list.component';

describe('CompetencyListComponent', () => {
  let component: CompetencyListComponent;
  let fixture: ComponentFixture<CompetencyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
