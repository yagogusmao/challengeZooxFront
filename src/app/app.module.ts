import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { StateCrudComponent } from './views/state-crud/state-crud.component';
import { StateCreateComponent } from './components/state/state-create/state-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { StateReadComponent } from './components/state/state-read/state-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from "@angular/material/select";
import { StateUpdateComponent } from './components/state/state-update/state-update.component';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityCrudComponent } from './views/city-crud/city-crud.component';
import { CityReadComponent } from './components/city/city-read/city-read.component';
import { CityUpdateComponent } from './components/city/city-update/city-update.component';
import { StateDeleteComponent } from './components/state/state-delete/state-delete.component';
import { CityDeleteComponent } from './components/city/city-delete/city-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    StateCrudComponent,
    StateCreateComponent,
    StateReadComponent,
    StateUpdateComponent,
    CityCreateComponent,
    CityCrudComponent,
    CityReadComponent,
    CityUpdateComponent,
    StateDeleteComponent,
    CityDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
