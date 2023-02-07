import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnChanges {
  courses: any;
  @Output() courseEmitter = new EventEmitter<string>();
  @Input() deletedCourse = "";

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    console.log('get courses called');
    this.apiService.getPipe('courses').subscribe((data: any) => {
      this.courses = data;
    });
  }

  ngOnChanges(changes : SimpleChanges) {
    if(changes['deletedCourse'].currentValue != "") {
      this.getCourses();
    }
  }

  open(course : any) {
    this.courseEmitter.emit(course.id);
  }
}
