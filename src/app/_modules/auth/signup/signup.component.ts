import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  first_name: string = "";
  last_name: string = "";
  username: string = "";
  email: string = "";
  password: string = "";
  password_confirmation: string = "";

  constructor(
    private api: ApiService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  signup() {
    let user_data = {
      "user": {
        "first_name": this.first_name,
        "last_name": this.last_name,
        "username": this.username,
        "email": this.email,
        "password": this.password,
        "password_confirmation": this.password_confirmation,
      }
    }
    this.api.postPipe('/users', user_data).subscribe((res) => {
      console.log(res);
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
