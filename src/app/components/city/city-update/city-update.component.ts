import { City } from './../city.model';
import { CityService } from './../city.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css']
})
export class CityUpdateComponent implements OnInit {

  city: City = {
    name: "",
    state_id: ""
  }

  states: [{
    value: "",
    viewValue: ""
  }]

  constructor(private cityService: CityService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.cityService.getStates().subscribe(res => {
      this.states = res.states;
    })
    this.cityService.readById(_id).subscribe(res => {
      console.log(res)
      this.city = res.city;
    })
  }

  updateCity(): void {
    this.cityService.update(this.city).subscribe(res => {
      this.cityService.showMessage(res.message);
      this.router.navigate(['/cities']);
    }, res => this.cityService.showMessage(res.error.message))
  }

  cancel(): void {
    this.router.navigate(['/cities'])
  }
}
