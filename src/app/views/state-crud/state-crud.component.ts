import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Estados",
      icon: "location_on",
      routeUrl: "/states"
    }
  }

  ngOnInit(): void {
  }

  navigateToStateCreate(): void {
    this.router.navigate(['/states/create'])
  }

}
