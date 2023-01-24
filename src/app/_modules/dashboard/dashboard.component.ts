import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);
  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
  }

}
