import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencyFormComponent } from './competency-form/competency-form.component';
import { CompetencyListComponent } from './competency-list/competency-list.component';
import { CompetencyViewComponent } from './competency-view/competency-view.component';
import { CompetenciesComponent } from './competencies.component';

import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    CompetenciesComponent,
    CompetencyFormComponent,
    CompetencyListComponent,
    CompetencyViewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzLayoutModule,
    NzButtonModule
  ],
  exports: [
    CompetenciesComponent,
    CompetencyFormComponent,
    CompetencyListComponent,
    CompetencyViewComponent
  ]
})
export class CompetenciesModule { }
