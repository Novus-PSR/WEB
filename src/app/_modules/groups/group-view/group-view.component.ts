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
  group: any;
  memberVisible = false;
  deckVisible = false;
  users: any;
  decks: any;
  selectedUser: any;
  selectedDeck: any;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private msg: NzMessageService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.api.getPipe('groups/' + this.group_id).subscribe((data: any) => {
      this.group = data;
    });

    this.validateForm = this.fb.group({
      group_name: [null, [Validators.required]],
      group_code: [null, [Validators.required]],
    });
    this.getUsers();
    this.getDecks();
  }

  cancel() {
    this.group = null;
    this.viewEmitter.emit('list');
  }

  deleteGroup() {
    this.api.deletePipe('groups/' + this.group.id).subscribe((resp: any) => {
      this.msg.success("Grupo eliminado con éxito");
      this.viewEmitter.emit("list");
    }, (err: any) => {
      this.msg.error("Error eliminando el grupo, inténtelo de nuevo");
    });
  }


  cancelConfirm(): void {
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

  deleteGroupMember(id: any) {
    this.api.deletePipe('group_members/' + id).subscribe((resp: any) => {
      this.group.group_members = this.group.group_members.filter((member: any) => member.id != id);
      this.msg.success("Usuario eliminado del grupo con éxito");
    }, (err: any) => {
      this.msg.error("Error eliminando el usuario del grupo, inténtelo de nuevo");
    });
  }

  deleteGroupDeck(id: any) {
    this.api.deletePipe('group_decks/' + id).subscribe((resp: any) => {
      this.group.group_decks = this.group.group_decks.filter((deck: any) => deck.id != id);
      this.msg.success("Cuestionario eliminado del grupo con éxito");
    }, (err: any) => {
      this.msg.error("Error eliminando el cuestionario del grupo, inténtelo de nuevo");
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      this.api.putPipe('groups/' + this.group.id, this.validateForm.value).subscribe((resp: any) => {
        this.msg.success("Grupo modificado con éxito");
        this.viewEmitter.emit("list");
      }, (err: any) => {
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

  showMemberModal() {
    this.filterUsers();
    this.memberVisible = true;
  }
  
  showDeckModal() {
    this.filterDecks();
    this.deckVisible = true;
  }

  closeMemberModal() {
    this.memberVisible = false;
  }

  closeDeckModal() {
    this.deckVisible = false;
  }

  addMember() {
    let json = {
      group_id: this.group.id,
      school_member_id: this.selectedUser.id
    }

    this.api.postPipe('group_members', json).subscribe((resp: any) => {
      this.msg.success("Usuario añadido al grupo con éxito"); 
      let newGM = resp;
      newGM.user = this.selectedUser.user;
      this.group.group_members.push(newGM);
      this.selectedUser = null;
      this.closeMemberModal();
    });
  }

  addDeck() {
    let json = {
      group_id: this.group.id,
      deck_id: this.selectedDeck.id
    }

    this.api.postPipe('group_decks', json).subscribe((resp: any) => {
      this.msg.success("Cuestionario añadido al grupo con éxito"); 
      let newGD = resp;
      newGD.deck = this.selectedUser;
      this.group.group_decks.push(newGD);
      this.selectedDeck = null;
      this.closeDeckModal();
    });
  }

  getUsers() {
    this.api.getPipe('school_members').subscribe((data: any) => {
      this.users = data;
    });
  }

  getDecks() {
    this.api.getPipe('decks').subscribe((data: any) => {
      this.decks = data;
    });
  }

  filterUsers() {
    this.users = this.users.filter((user: any) => {
      return !this.group.group_members.find((group_member: any) => {
        return group_member.user.id == user.user.id;
      });
    });
  }

  filterDecks() {
    this.decks = this.decks.filter((deck: any) => {
      return !this.group.group_decks.find((group_deck: any) => {
        return group_deck.deck.id == deck.id;
      });
    });
  }
}
