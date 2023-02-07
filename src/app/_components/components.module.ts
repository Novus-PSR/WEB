import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ProfilepicComponent } from './profilepic/profilepic.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LoadingComponent,
    ProfilepicComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    RouterModule,
    NzButtonModule,
    NzInputModule,
    NzDropDownModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LoadingComponent
  ]
})
export class ComponentsModule {
 }
