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
  loading :  boolean = false;

  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    let json = {
      "email": this.email,
      "password": this.password
    };

    this.api.loginPipe(json).subscribe((tokenData:any) => {
      document.cookie = "token=" + tokenData.token + "; expires=" + tokenData.exp;
      this.api.getPipe('users/' + tokenData.user_id).subscribe((userData:any) => {
        document.cookie = "user=" + JSON.stringify(userData), + "; expires=" + tokenData.exp;
        this.loading = false;
        this.router.navigateByUrl('/dashboard');
      });
    });
  }

  goToSignUp() {
    this.router.navigateByUrl('/signup');
  }

}
