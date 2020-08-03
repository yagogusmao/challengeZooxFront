import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-state-crud',
  templateUrl: './state-crud.component.html',
  styleUrls: ['./state-crud.component.css']
})
export class StateCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToStateCreate(): void {
    this.router.navigate(['/states/create'])
  }

}
