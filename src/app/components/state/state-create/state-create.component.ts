import { State } from './../state.model';
import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-create',
  templateUrl: './state-create.component.html',
  styleUrls: ['./state-create.component.css']
})
export class StateCreateComponent implements OnInit {

  state: State = {
    name: "",
    abbreviation: ""
  }

  constructor(private stateService: StateService, private router: Router) { }

  ngOnInit(): void {
  }

  createState(): void {
    this.stateService.create(this.state).subscribe(() => {
      this.stateService.showMessage("Estado criado");
      this.router.navigate(['/states']);
    }, res => this.stateService.showMessage(res.error.message))
  }

  cancel(): void {
    this.router.navigate(['/states']);
  }
}
