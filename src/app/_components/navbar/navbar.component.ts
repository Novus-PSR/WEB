import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);
  schoolData : any;

  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
    this.api.getPipe('schools/' + this.user.schools[0].id).subscribe((schoolData:any) => {
      this.schoolData = schoolData;
    });
  }


}
