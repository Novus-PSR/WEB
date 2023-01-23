import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getPipe('courses').subscribe((data: any) => {
      this.courses = data;
    });
  }
}
