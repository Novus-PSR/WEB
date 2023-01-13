import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  constructor() { }

  url = window.location.href.split("/").slice(-1)[0];
  
  ngOnInit(): void {
  }
}
