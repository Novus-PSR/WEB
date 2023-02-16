import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
@Input() course_id: any;
@Output() cancelEmitter = new EventEmitter<string>();
  course : any;
  constructor(
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.api.getPipe('courses/' + this.course_id).subscribe((data: any) => {
      this.course = data;
    });
  }

  cancel() {
    this.course = null;
    this.cancelEmitter.emit('list');
  }
}
