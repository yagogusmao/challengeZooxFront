import { City } from './../city.model';
import { CityService } from './../city.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {

  city: City = {
    name: "",
    state_id: ""
  }

  state: string

  constructor(private cityService: CityService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.cityService.readById(_id).subscribe(res => {
      this.city = res.city;
    })
    this.cityService.getStates().subscribe(res => {
      this.state = res.states.filter(state => state.value === this.city.state_id)[0].viewValue;
    })
  }

  deleteCity(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.cityService.delete(_id).subscribe(res => {
      this.cityService.showMessage("Cidade deletada com sucesso.");
      this.router.navigate(['/cities']);
    }, res => this.cityService.showMessage(res.error.message))
  }

  cancel(): void {
    this.router.navigate(['/cities'])
  }
}
