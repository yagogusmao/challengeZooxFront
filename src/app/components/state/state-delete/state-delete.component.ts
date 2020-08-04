import { State } from './../state.model';
import { StateService } from './../state.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-delete',
  templateUrl: './state-delete.component.html',
  styleUrls: ['./state-delete.component.css']
})
export class StateDeleteComponent implements OnInit {

  state: State;

  constructor(private stateService: StateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.stateService.readById(_id).subscribe(res => {
      this.state = res.state;
    })
  }

  deleteState(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.stateService.delete(_id).subscribe(res => {
      this.stateService.showMessage("Estado deletado com sucesso.");
      this.router.navigate(['/states']);
    }, res => this.stateService.showMessage(res.error.message))
  }

  cancel(): void {
    this.router.navigate(['/states'])
  }
}
