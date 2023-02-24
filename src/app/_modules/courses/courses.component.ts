import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  course_id: any;
  action = "list";

  constructor() { }

  ngOnInit(): void {
  }

  setAction(action: string) {
    this.action = action;
  }

  openCourse(event: any) {
    this.action = "view";
    this.course_id = event;
  }
}
