import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'competency-form',
  templateUrl: './competency-form.component.html',
  styleUrls: ['./competency-form.component.css']
})
export class CompetencyFormComponent {
  @Output() actionEmitter = new EventEmitter<string>();
}
