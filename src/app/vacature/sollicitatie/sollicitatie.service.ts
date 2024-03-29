import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { Sollicitatie } from './sollicitatie';

@Injectable({
  providedIn: 'root'
})
export class SollicitatieService {

  constructor(private httpClient: HttpClient, private router: Router, private authService: AuthService) { }

  getSollicitatiesFromVacature(id: number): Observable<Sollicitatie[]> {
    return this.httpClient.get<Sollicitatie[]>('https://localhost:44393/api/sollicitaties?vacatureId=' + id);
  }

  getSollicitatiesFromUser(id: number): Observable<Sollicitatie[]> {
    console.log(id);
    return this.httpClient.get<Sollicitatie[]>('https://localhost:44393/api/sollicitaties?userId=' + id)
  }
  getSollicitatiesOnVacatureFromUser(userId: number, vacatureId: number): Observable<Sollicitatie> {
    return this.httpClient.get<Sollicitatie>('https://localhost:44393/api/sollicitaties/FromUserOnVacature?userId=' + userId + "&vacatureId=" + vacatureId)
  }

  deleteSollicitatie(id: number): Observable<Sollicitatie> {
    return this.httpClient.delete<Sollicitatie>('https://localhost:44393/api/sollicitaties/' + id);
  }

  getSollicitatieById(id: number): Observable<Sollicitatie> {
    return this.httpClient.get<Sollicitatie>('https://localhost:44393/api/sollicitaties/' + id);
  }

  putSollicitatie(id: number, sollicitatie: Sollicitatie): Observable<Sollicitatie> {
    return this.httpClient.put<Sollicitatie>("https://localhost:44393/api/sollicitaties/" + id, sollicitatie);
  }

  postSollicitatie(sollicitatie: Sollicitatie): Observable<Sollicitatie> { 
    console.log(sollicitatie);
    return this.httpClient.post<Sollicitatie>("https://localhost:44393/api/sollicitaties", sollicitatie);
  }
}
