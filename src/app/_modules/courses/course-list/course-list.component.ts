import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any;
  @Output() courseEmitter = new EventEmitter<string>();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.apiService.getPipe('courses').subscribe((data: any) => {
      this.courses = data;
    });
  }

  open(course : any) {
    this.courseEmitter.emit(course.id);
  }
}
