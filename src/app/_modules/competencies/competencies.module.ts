import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencyFormComponent } from './competency-form/competency-form.component';
import { CompetencyListComponent } from './competency-list/competency-list.component';
import { CompetencyViewComponent } from './competency-view/competency-view.component';
import { CompetenciesComponent } from './competencies.component';

import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

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
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzTableModule
  ],
  exports: [
    CompetenciesComponent,
    CompetencyFormComponent,
    CompetencyListComponent,
    CompetencyViewComponent
  ]
})
export class CompetenciesModule { }
