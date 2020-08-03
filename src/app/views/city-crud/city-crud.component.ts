import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-city-crud',
  templateUrl: './city-crud.component.html',
  styleUrls: ['./city-crud.component.css']
})
export class CityCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCityCreate(): void {
    this.router.navigate(['/cities/create'])
  }


}
