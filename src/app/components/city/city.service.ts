import { City } from './city.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  baseUrl = "http://localhost:8080/city";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(city: City): Observable<any> {
    return this.http.post<any>(this.baseUrl, city);
  }

  read(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  readById(_id: string): Observable<any> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<any>(url);
  }

  update(city: City): Observable<any> {
    const url = `${this.baseUrl}/${city._id}`;
    return this.http.put<any>(url, city)
  }

  getStates(): Observable<any> {
    const url = `${this.baseUrl}/states`;
    return this.http.get<any>(url);
  }

}
