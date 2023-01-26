import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'web';
  
  url = window.location.href.split("/").slice(-1)[0];

  ngOnInit():void {
  };

}
