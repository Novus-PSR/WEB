import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})


export class NotificationComponent{
  notificationarray = ["Notificacion 1", "Notificacion 2"];
   
  closeNotif(index : any){
    document.getElementById(index)?.remove();
  }
}
