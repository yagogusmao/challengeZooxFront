import { StateService } from './../state.service';
import { State } from './../state.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-read',
  templateUrl: './state-read.component.html',
  styleUrls: ['./state-read.component.css']
})
export class StateReadComponent implements OnInit {

  states: State[];
  displayedColumns = ["_id", "name", "abbreviation", "date_creation", "date_last_update", "action"];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.read().subscribe(res => this.states = res.states, 
      res => this.stateService.showMessage(res.error.message))
  }

}
