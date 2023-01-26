import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ComponentsModule } from 'src/app/_components/components.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    ComponentsModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzAlertModule,
    NzMessageModule
  ],
  exports: [
    CoursesComponent,
    CourseListComponent
  ]
})
export class CoursesModule { }
