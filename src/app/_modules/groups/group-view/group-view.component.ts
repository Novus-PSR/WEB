import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {
  validateForm!: FormGroup;
  @Input() group_id: any;
  @Output() viewEmitter = new EventEmitter<string>();
  group : any;
  isVisible = false;

  constructor(
    private fb: FormBuilder,
    private api : ApiService,
    private msg: NzMessageService,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.api.getPipe('groups/' + this.group_id).subscribe((data: any) => {
      this.group = data;
    });

    this.validateForm = this.fb.group({
      group_name: [null, [Validators.required]],
      group_code: [null, [Validators.required]],
    });
  }

  cancel() {
    this.group = null;
    this.viewEmitter.emit('list');
  }

  showModal(): void {
    this.isVisible = true;
  }

  deleteGroup() {
    this.api.deletePipe('groups/' + this.group.id).subscribe((resp:any) => {
      this.msg.success("Grupo eliminado con éxito");
      this.viewEmitter.emit("list");
    }, (err:any) => {
      this.msg.error("Error eliminando el grupo, inténtelo de nuevo");
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: '¿Seguro que quieres borrar este grupo?',
      nzContent: '<b style="color: red;">Tendrás que crear el grupo otra vez si haces esto</b>',
      nzOkText: 'Sí',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteGroup(),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      this.api.putPipe('groups/' + this.group.id,this.validateForm.value).subscribe((resp:any) => {
        this.msg.success("Grupo modificado con éxito");
        this.viewEmitter.emit("list");
      }, (err:any) => {
        this.msg.error("Error modificando el grupo, inténtelo de nuevo");
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