import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://localhost:44393/api/users");
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>("https://localhost:44393/api/users/" + id);
  }

  postUser(user: User): Observable<User> { 
    console.log(user);
    return this.httpClient.post<User>("https://localhost:44393/api/users", user);
  }

  putUser(id: number, user: User): Observable<User> {
    return this.httpClient.put<User>("https://localhost:44393/api/users/" + id, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>("https://localhost:44393/api/users/" + id);
  } 
}
