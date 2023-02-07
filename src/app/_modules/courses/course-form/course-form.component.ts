import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  validateForm!: FormGroup;
  @Output() actionEmitter = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      course_name: [null, [Validators.required]],
      course_code: [null, [Validators.required]],
      course_description: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let schoolData = localStorage.getItem('school');
      if (schoolData) {
        this.validateForm.value.school_id = JSON.parse(schoolData).id;
      }
      this.api.postPipe('courses',this.validateForm.value).subscribe((resp:any) => {
        this.msg.success("Curso creado con éxito");
        this.actionEmitter.emit("list");
      }, (err:any) => {
        this.msg.error("Error creando el curso, inténtelo de nuevo");
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
