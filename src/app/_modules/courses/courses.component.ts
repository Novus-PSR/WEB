import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  course_id: any;
  action = "list";
  course = {
    "id": "",
    "course_name": "",
    "course_code": "",
    "course_description": "",
    "school_id": "",
    "groups": [{ "id": "", "group_name": "", "group_description": "", "course_id": "", "created_at": "", "updated_at": "" }],
    "created_at": "",
    "updated_at": ""
  }

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
