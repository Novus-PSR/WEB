import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent,
    CourseListComponent
  ]
})
export class CoursesModule { }
