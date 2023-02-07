import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';
import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  constructor(){}
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }
  size: NzButtonSize = 'large';
}
