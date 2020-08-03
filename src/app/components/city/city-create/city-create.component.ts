import { City } from './../city.model';
import { CityService } from './../city.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {

  city: City = {
    name: "",
    state_id: ""
  }

  states: [{
    value: "",
    viewValue: ""
  }]

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    this.cityService.getStates().subscribe(res => {
      this.states = res.states
    })
  }

  createCity(): void {
    this.cityService.create(this.city).subscribe(res => {
      this.cityService.showMessage(res.message);
      this.router.navigate(['/cities']);
    }, res => this.cityService.showMessage(res.error.message))
  }

  cancel(): void {
    this.router.navigate(['/cities']);
  }
}
