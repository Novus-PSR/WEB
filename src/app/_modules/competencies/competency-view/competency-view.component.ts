import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'competency-view',
  templateUrl: './competency-view.component.html',
  styleUrls: ['./competency-view.component.css']
})
export class CompetencyViewComponent {
  validateForm!: FormGroup;
  @Input() competency_id: any;
  @Output() viewEmitter = new EventEmitter<string>();
  competency : any;
  isVisible = false;
  selectedCompetency : any;

  constructor(
    private fb: FormBuilder,
    private api : ApiService,
    private msg: NzMessageService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.api.getPipe('competencies/' + this.competency_id).subscribe((data: any) => {
      this.competency = data;
      console.log(this.competency.courses[0].course_name);
    });

    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      competency_code: [null, [Validators.required]],
    });
    // this.getCompetencies();
  }

  cancel() {
    this.competency = null;
    this.viewEmitter.emit('list');
  }

  showModal(): void {
    this.isVisible = true;
  }

  // handleOk(): void {
  //   let body = {
  //     course_id: this.course.id,
  //     competency_id: this.selectedCompetency.id
  //   }
  //   this.api.postPipe('course_competencies',body).subscribe((resp:any) => {
  //     this.msg.success("Competencia agregada al curso con éxito");
  //     this.course.competencies.push(this.selectedCompetency);
  //   });
  //   this.isVisible = false;
  // }

  // handleCancel(): void {
  //   console.log('Button cancel clicked!');
  //   this.isVisible = false;
  // }

  deleteCompetency() {
    this.api.deletePipe('competencies/' + this.competency.id).subscribe((resp:any) => {
      this.msg.success("Competencia eliminada con éxito");
      this.viewEmitter.emit("list");
    }, (err:any) => {
      this.msg.error("Error eliminando la competencia, inténtelo de nuevo");
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '¿Seguro que quieres borrar esta competencia?',
      nzContent: '<b style="color: red;">Tendrás que crear la competencia otra vez si haces esto</b>',
      nzOkText: 'Sí',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteCompetency(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  // getCompetencies() {
  //   this.api.getPipe('competencies').subscribe((data: any) => {
  //     this.competencies = data;
  //   });
  // }

  // onCompetencyChange(event: any) {
  // }

  submitForm() {
    if (this.validateForm.valid) {
      this.api.putPipe('competencies/' + this.competency.id,this.validateForm.value).subscribe((resp:any) => {
        this.msg.success("Competencia modificada con éxito");
        this.viewEmitter.emit("list");
      }, (err:any) => {
        this.msg.error("Error modificando la competencia, inténtelo de nuevo");
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
