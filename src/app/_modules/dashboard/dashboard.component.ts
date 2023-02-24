import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);

  formatTwo = (): string => `100%`;

  private colors = [
    '#B76EDA', //<50
    '#6400CC', //>50
    '#00CFDD' //100
  ];

  alumnoarray = ["Alumno 4","Alumno 5","Alumno 6","Alumno 7","Alumno 8","Alumno 9"];

  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
  }

  selectColor(percent : any){
    if (percent == 100){
      return this.colors[2];
    }else if (percent>50) {
      return this.colors[1];
    } else {
      return this.colors[0];
    }
  }

  selectStyle(percent : any){
    if (percent == 100){
      return 'custom-progress-100';
    }else if (percent>50) {
      return 'custom-progress-99';
    } else {
      return 'custom-progress-50';
    }
  }
}
