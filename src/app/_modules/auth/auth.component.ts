import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {

  }

  login() {
    let json = {
      "email": this.email,
      "password": this.password
    };

    this.api.loginPipe(json).subscribe((resp:any) => {
      console.log(resp);
    });
  }
}
