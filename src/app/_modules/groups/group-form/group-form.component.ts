import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent {
  validateForm!: FormGroup;
  user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);
  @Output() actionEmitter = new EventEmitter<string>();
  courses : any;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getCourses();
    this.validateForm = this.fb.group({
      group_name: [null, [Validators.required]],
      group_code: [null, [Validators.required]],
      course_id: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.api.postPipe('groups',this.validateForm.value).subscribe((resp:any) => {
        this.msg.success("Grupo creado con éxito");
        this.actionEmitter.emit("list");
      }, (err:any) => {
        this.msg.error("Error creando el grupo, inténtelo de nuevo");
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
  
  cancel() {
    this.actionEmitter.emit("list");
  }

  getCourses() {
    return this.api.getPipe('courses').subscribe((resp:any) => {
      this.courses = resp;
    });
  }
}
