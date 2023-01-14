import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";
  
  constructor(
    private api : ApiService,
    private router : Router
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

  goToSignUp() {
    this.router.navigateByUrl('/signup');
  }

}
