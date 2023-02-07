import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  deletedCourse = "";
  action = "list";
  isVisible = false;
  course = {
    "id": "",
    "course_name": "",
    "course_code": "",
    "course_description": "",
    "school_id": "",
    "created_at": "",
    "updated_at": ""
  }
  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
  }

  setAction(action: string) {
    this.action = action;
  }

  openCourse(event: any) {
    this.api.getPipe('courses/'+event).subscribe((data: any) => {
      this.course = data;
      this.showModal();
    }); 
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.resetData();
  }

  deleteCourse(id : any) {
    this.api.deletePipe('courses/'+id).subscribe((data: any) => {
      this.deletedCourse = id;  
      this.isVisible = false;
      this.resetData();
    });
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  resetData() {
    this.course = {
      "id": "",
      "course_name": "",
      "course_code": "",
      "course_description": "",
      "school_id": "",
      "created_at": "",
      "updated_at": ""
    }
  }
}
