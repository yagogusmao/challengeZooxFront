import { CityDeleteComponent } from './components/city/city-delete/city-delete.component';
import { StateDeleteComponent } from './components/state/state-delete/state-delete.component';
import { CityUpdateComponent } from './components/city/city-update/city-update.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityCrudComponent } from './views/city-crud/city-crud.component';
import { StateUpdateComponent } from './components/state/state-update/state-update.component';
import { StateCreateComponent } from './components/state/state-create/state-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { StateCrudComponent } from "./views/state-crud/state-crud.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "states",
  component: StateCrudComponent
}, {
  path: "states/create",
  component: StateCreateComponent
}, {
  path: "states/update/:_id",
  component: StateUpdateComponent
}, {
  path: "cities",
  component: CityCrudComponent
}, {
  path: "cities/create",
  component: CityCreateComponent
}, {
  path: "cities/update/:_id",
  component: CityUpdateComponent
}, {
  path: "states/delete/:_id",
  component: StateDeleteComponent
}, {
  path: "cities/delete/:_id",
  component: CityDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
