import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacature } from './vacature';

@Injectable({
  providedIn: 'root'
})
export class VacatureService {

  constructor(private httpClient: HttpClient) { }

  getVacatures() : Observable<Vacature[]> {
    return this.httpClient.get<Vacature[]>("https://localhost:44393/api/vacatures");
  }

  getVacatureById(id: number): Observable<Vacature> {
    return this.httpClient.get<Vacature>("https://localhost:44393/api/vacatures/" + id);
  }

  postVacature(vacature: Vacature): Observable<Vacature> {
    return this.httpClient.post<Vacature>("https://localhost:44393/api/vacatures", vacature);
  }

  putVacature(id: number, vacature: Vacature): Observable<Vacature> {
    return this.httpClient.put<Vacature>("https://localhost:44393/api/vacatures/" + id, vacature);
  }

  deleteVacature(id: number): Observable<Vacature> {
    return this.httpClient.delete<Vacature>("https://localhost:44393/api/vacatures/" + id);
  } 
}

