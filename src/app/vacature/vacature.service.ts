import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { Vacature } from './vacature';

@Injectable({
  providedIn: 'root'
})
export class VacatureService {

  url: string = "https://localhost:44393/api/vacatures?"

  constructor(private httpClient: HttpClient) { }

  getVacatures(bedrijfId?: number, titel?: string, active: boolean = false) : Observable<Vacature[]> {
    if (bedrijfId == null && titel == null && !active) {
      return this.httpClient.get<Vacature[]>("https://localhost:44393/api/vacatures");
    } else if (bedrijfId == null && titel == null && active) {
      return this.httpClient.get<Vacature[]>("https://localhost:44393/api/vacatures?active=true");
    }
    return this.httpClient.get<Vacature[]>("https://localhost:44393/api/vacatures?bedrijfId=" + bedrijfId + "&titel=" + titel + "&active=" + active);
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

