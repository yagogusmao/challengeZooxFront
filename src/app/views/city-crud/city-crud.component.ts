import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-city-crud',
  templateUrl: './city-crud.component.html',
  styleUrls: ['./city-crud.component.css']
})
export class CityCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: "Cidades",
      icon: "location_city",
      routeUrl: "/cities"
    }
  }

  ngOnInit(): void {
  }

  navigateToCityCreate(): void {
    this.router.navigate(['/cities/create'])
  }

}
