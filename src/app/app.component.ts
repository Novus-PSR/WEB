import { Component, OnInit } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';
// import { ApiService } from './_services/api.service';
// import * as feather from 'feather-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    // private breakpointObserver: BreakpointObserver,
    // private api : ApiService
  ) {}

  title = 'web';
  
  url = window.location.href.split("/").slice(-1)[0];

  ngOnInit():void {
  };

  // ngAfterViewInit(): void {
  //   feather.replace();
  // }

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

}
