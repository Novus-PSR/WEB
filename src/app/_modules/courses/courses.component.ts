import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  course_id: any;

  deletedCourse = "";
  action = "list";
  isVisible = false;
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
  constructor(
    private api: ApiService,
    private msg: NzMessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.course_id = paramMap.get('course_id');
    })
  }

  setAction(action: string) {
    this.action = action;
  }

  openCourse(event: any) {
    this.action = "view";
    this.course_id = event;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    this.resetData();
  }

  deleteCourse(id: any) {
    this.api.deletePipe('courses/' + id).subscribe((data: any) => {
      this.msg.success("Curso borrado con éxito");
      this.deletedCourse = id;
      this.isVisible = false;
      this.resetData();
    }, (err: any) => {
      this.msg.error("Error borrando el curso, inténtelo de nuevo");
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
      "groups": [{ "id": "", "group_name": "", "group_description": "", "course_id": "", "created_at": "", "updated_at": "" }],
      "created_at": "",
      "updated_at": ""
    }
  }
}
