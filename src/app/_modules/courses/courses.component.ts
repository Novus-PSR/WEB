import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  action = "list";
  constructor() { }

  ngOnInit(): void {
  }

  setAction(action: string) {
    this.action = action;
  }
}
