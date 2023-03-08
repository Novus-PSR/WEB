// Components
import { GroupsComponent } from './groups.component';
import { GroupViewComponent } from './group-view/group-view.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupFormComponent } from './group-form/group-form.component';


// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/_components/components.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    GroupsComponent,
    GroupViewComponent,
    GroupListComponent,
    GroupFormComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzPopconfirmModule,
    NzModalModule
  ],
  exports: [
    GroupsComponent,
    GroupViewComponent,
    GroupListComponent,
    GroupFormComponent
  ]
})
export class GroupsModule { }
