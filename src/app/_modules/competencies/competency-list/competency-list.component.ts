import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'competency-list',
  templateUrl: './competency-list.component.html',
  styleUrls: ['./competency-list.component.css']
})
export class CompetencyListComponent implements OnInit {
  competencies: any;
  @Output() competencyEmitter = new EventEmitter<string>();

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getCompetencies();
  }

  getCompetencies() {
    this.api.getPipe('competencies').subscribe((data: any) => {
      this.competencies = data;
    });
  }

  open(course : any) {
    this.competencyEmitter.emit(course.id);
  }
}
