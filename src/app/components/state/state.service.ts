import { State } from './state.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  baseUrl = "http://localhost:8080/state";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(state: State): Observable<any> {
    return this.http.post<any>(this.baseUrl, state);
  }

  read(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  readById(_id: string): Observable<any> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<any>(url);
  }

  update(state: State): Observable<any> {
    const url = `${this.baseUrl}/${state._id}`;
    return this.http.put<any>(url, state)
  }

}
