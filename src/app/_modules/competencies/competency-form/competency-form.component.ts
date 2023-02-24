import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/_services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'competency-form',
  templateUrl: './competency-form.component.html',
  styleUrls: ['./competency-form.component.css']
})
export class CompetencyFormComponent implements OnInit {
  validateForm!: FormGroup;
  user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);
  @Output() actionEmitter = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      competency_code: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let schoolData = localStorage.getItem('school');
      if (schoolData) {
        this.validateForm.value.school_id = JSON.parse(schoolData).id;
      }

      let school_member_id = this.user.school_members[0].id;
      this.validateForm.value.created_by_id = school_member_id;
      this.api.postPipe('competencies',this.validateForm.value).subscribe((resp:any) => {
        this.msg.success("Competencia creada con éxito");
        this.actionEmitter.emit("list");
      }, (err:any) => {
        this.msg.error("Error creando la competencia, inténtelo de nuevo");
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
}
