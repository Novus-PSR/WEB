import { Component } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent {
  course_id: any;

  deletedCourse = "";
  action = "list";
  isVisible = false;
  competency = {
    "id": "",
    "name": "",
    "description": "",
    "competency_code": "",
    "school_id": "",
    "created_by_id": "",
    "created_at": "",
    "updated_at": ""
  }

  constructor(
    private api: ApiService,
    private msg: NzMessageService,
  ) { }

  ngOnInit(): void {
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
    this.competency = {
      "id": "",
    "name": "",
    "description": "",
    "competency_code": "",
    "school_id": "",
    "created_by_id": "",
    "created_at": "",
    "updated_at": ""
    }
  }
}
