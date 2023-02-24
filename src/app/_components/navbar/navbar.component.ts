import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  user = JSON.parse(document.cookie.split('user=')[1].split(';')[0]);
  schoolData : any;
  
  constructor(
    private api : ApiService,
    private notification : NzNotificationService,
  ) { }

  ngOnInit(): void {
    this.api.getPipe('schools/' + this.user.schools[0].id).subscribe((schoolData:any) => {
      this.schoolData = schoolData;
      localStorage.setItem('school', JSON.stringify(schoolData));
    });

  }

  visible = false;
  show = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  toggleCollapsed(): void {
    this.visible = !this.visible;
  }

  createBasicNotification(): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-265px'
        },
        nzClass: 'test-class',
        nzDuration : 0,
        nzPlacement : 'topRight'
      }
    );
  }
}
