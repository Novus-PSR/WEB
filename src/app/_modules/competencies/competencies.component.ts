import { Component } from '@angular/core';

@Component({
  selector: 'competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent {
  competency_id: any;
  action = "list";

  constructor() { }

  ngOnInit(): void {
  }

  setAction(action: string) {
    this.action = action;
  }

  openCompetency(event: any) {
    this.action = "view";
    this.competency_id = event;
  }
}
