import { State } from './../state.model';
import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-update',
  templateUrl: './state-update.component.html',
  styleUrls: ['./state-update.component.css']
})
export class StateUpdateComponent implements OnInit {

  state: State;

  constructor(private stateService: StateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.stateService.readById(_id).subscribe(res => {
      this.state = res.state;
    })
  }

  updateState(): void {
    this.stateService.update(this.state).subscribe(res => {
      this.stateService.showMessage(res.message);
      this.router.navigate(['/states']);
    }, res => this.stateService.showMessage(res.error.message))
  }

  cancel(): void {
    this.router.navigate(['/states'])
  }
}
