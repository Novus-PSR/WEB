import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as feather from 'feather-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  constructor(private breakpointObserver: BreakpointObserver) {}

  title = 'web';
  
  url = window.location.href.split("/").slice(-1)[0];

  ngOnInit():void {

  };

  ngAfterViewInit(): void {
    feather.replace();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
