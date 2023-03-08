import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css']
})
export class ProfilepicComponent implements OnInit {

  // user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);
  user = JSON.parse(localStorage.getItem('user')!);
  //@Input() public photoUrl: string = "";
  //@Input() public name: string = "";

  public showInitials = false;
  public initials: string = ""
  public circleColor: string = "";

  private colors = [
    // '#EB7181', // red
    // '#468547', // green
    // '#FFD558', // yellow
    // '#3670B2', // blue
    '#B76EDA', //novus
  ];

  ngOnInit() {

    // if (!this.photoUrl) {
    //   this.showInitials = true;
    //   this.createInititals();

    //   const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    //   this.circleColor = this.colors[randomIndex];
    // }

    this.showInitials = true;
    this.createInitials();
    const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
    this.circleColor = this.colors[randomIndex];

  }

  private createInitials(): void {
    let initials = "";

    // for (let i = 0; i < this.name.length; i++) {
    //   if (this.name.charAt(i) === ' ') {
    //     continue;
    //   }

    //   if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
    //     initials += this.name.charAt(i);

    //     if (initials.length == 2) {
    //       break;
    //     }
    //   }
    // }

    initials += this.user.first_name.charAt(0) + this.user.last_name.charAt(0);

    this.initials = initials;
  }
}
