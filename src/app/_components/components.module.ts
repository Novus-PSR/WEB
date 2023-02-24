import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ProfilepicComponent } from './profilepic/profilepic.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { IconsModule } from './icons/icons.module';
import { NotificationComponent } from './notification/notification.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BarComponent } from './bar/bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ProfilepicComponent,
    NotificationComponent,
    BarComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzDropDownModule,
    NzDrawerModule,
    NzDividerModule,
    NzNotificationModule,
    IconsModule,
    NzToolTipModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    BarComponent,
    ProfilepicComponent,
    IconsModule
  ]
})
export class ComponentsModule {
 }
