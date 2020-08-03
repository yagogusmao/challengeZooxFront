import { CityService } from './../city.service';
import { City } from './../city.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-read',
  templateUrl: './city-read.component.html',
  styleUrls: ['./city-read.component.css']
})
export class CityReadComponent implements OnInit {

  cities: City[];
  displayedColumns = ["_id", "name", "state", "action"];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.read().subscribe(res => this.cities = res.cities, 
      res => this.cityService.showMessage(res.error.message))
  }

}
