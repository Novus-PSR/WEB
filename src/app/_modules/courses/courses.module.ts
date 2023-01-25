import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ComponentsModule } from 'src/app/_components/components.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
    NzDividerModule
  ],
  exports: [
    CoursesComponent,
    CourseListComponent
  ]
})
export class CoursesModule { }
