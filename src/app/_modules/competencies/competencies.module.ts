// Components
import { CompetenciesComponent } from './competencies.component';
import { CompetencyListComponent } from './competency-list/competency-list.component';
import { CompetencyFormComponent } from './competency-form/competency-form.component';
import { CompetencyViewComponent } from './competency-view/competency-view.component';

// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

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
    NzTableModule,
    NzIconModule,
    NzDropDownModule
  ],
  exports: [
    CompetenciesComponent,
    CompetencyFormComponent,
    CompetencyListComponent,
    CompetencyViewComponent
  ]
})
export class CompetenciesModule { }
