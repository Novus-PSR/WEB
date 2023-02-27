import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  validateForm!: FormGroup;
  @Input() course_id: any;
  @Output() viewEmitter = new EventEmitter<string>();
  course : any;
  isVisible = false;
  competencies : any;
  selectedCompetency : any;

  constructor(
    private fb: FormBuilder,
    private api : ApiService,
    private msg: NzMessageService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.api.getPipe('courses/' + this.course_id).subscribe((data: any) => {
      console.log(data);
      this.course = data;
    });

    this.validateForm = this.fb.group({
      course_name: [null, [Validators.required]],
      course_code: [null, [Validators.required]],
      course_description: [null, [Validators.required]],
      course_type: [null, [Validators.required]],
      semester: [null, [Validators.required]],
    });
    this.getCompetencies();
  }

  cancel() {
    this.course = null;
    this.viewEmitter.emit('list');
  }

  showModal(): void {
    this.filterCompetencies();
    this.isVisible = true;
  }

  handleOk(): void {
    let body = {
      course_id: this.course.id,
      competency_id: this.selectedCompetency.id
    }
    this.api.postPipe('course_competencies',body).subscribe((resp:any) => {
      this.msg.success("Competencia agregada al curso con éxito");
      this.course.competencies.push(this.selectedCompetency);
      this.selectedCompetency = null;
    });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  deleteCourse() {
    this.api.deletePipe('courses/' + this.course.id).subscribe((resp:any) => {
      this.msg.success("Curso eliminado con éxito");
      this.viewEmitter.emit("list");
    }, (err:any) => {
      this.msg.error("Error eliminando el curso, inténtelo de nuevo");
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '¿Seguro que quieres borrar este curso?',
      nzContent: '<b style="color: red;">Tendrás que crear el curso otra vez si haces esto</b>',
      nzOkText: 'Sí',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteCourse(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  getCompetencies() {
    this.api.getPipe('competencies').subscribe((data: any) => {
      this.competencies = data;
    });
  }

  filterCompetencies() {
    this.competencies = this.competencies.filter((competency: any) => {
      return !this.course.course_competencies.find((courseCompetency: any) => {
        return courseCompetency.competency.id == competency.id;
      });
    });
  };

  deleteCompetency(id : any, index : any) {
    this.api.deletePipe('course_competencies/' + id).subscribe((resp:any) => {
      this.msg.success("Competencia eliminada del curso con éxito");
      this.course.course_competencies.splice(index,1);
    }, (err:any) => {
      this.msg.error("Error eliminando la competencia del curso, inténtelo de nuevo");
    });
  }

  onCompetencyChange(value: any) {
  };

  submitForm() {
    if (this.validateForm.valid) {
      this.api.putPipe('courses/' + this.course.id,this.validateForm.value).subscribe((resp:any) => {
        this.msg.success("Curso modificado con éxito");
        this.viewEmitter.emit("list");
      }, (err:any) => {
        this.msg.error("Error modificando el curso, inténtelo de nuevo");
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
