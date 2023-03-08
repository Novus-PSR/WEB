import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent {
  groups: any;
  @Output() groupEmitter = new EventEmitter<string>();

  constructor(
    private api : ApiService
  ) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.api.getPipe('groups').subscribe((data: any) => {
      this.groups = data;
    });
  }

  open(group: any) {
    this.groupEmitter.emit(group.id);
  }
}
