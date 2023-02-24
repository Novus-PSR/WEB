import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks.component';
import { ComponentsModule } from 'src/app/_components/components.module';



@NgModule({
  declarations: [
    DecksComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    DecksComponent
  ]
})
export class DecksModule { }
