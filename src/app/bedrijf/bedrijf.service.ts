import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bedrijf } from './bedrijf';

@Injectable({
  providedIn: 'root'
})
export class BedrijfService {

  constructor(private httpClient: HttpClient) { }

  getBedrijven() : Observable<Bedrijf[]> {
    return this.httpClient.get<Bedrijf[]>("https://localhost:44393/api/bedrijfs");
  }

  getBedrijvenFromUser(id: number): Observable<Bedrijf[]> {
    return this.httpClient.get<Bedrijf[]>("https://localhost:44393/api/bedrijfs?userId=" + id);
  }

  getBedrijfById(id: number): Observable<Bedrijf> {
    return this.httpClient.get<Bedrijf>("https://localhost:44393/api/bedrijfs/" + id);
  }

  postBedrijf(bedrijf: Bedrijf): Observable<Bedrijf> { 
    console.log(bedrijf);
    return this.httpClient.post<Bedrijf>("https://localhost:44393/api/bedrijfs", bedrijf);
  }

  putBedrijf(id: number, bedrijf: Bedrijf): Observable<Bedrijf> {
    return this.httpClient.put<Bedrijf>("https://localhost:44393/api/bedrijfs/" + id, bedrijf);
  }

  deleteBedrijf(id: number): Observable<Bedrijf> {
    return this.httpClient.delete<Bedrijf>("https://localhost:44393/api/bedrijfs/" + id);
  } 
}
