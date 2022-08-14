import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { User as Register } from '../admin/user/user'; 
import { UserResponse } from './userResponse';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getUser(): User | null {
    if (this.isLoggedIn()){
      return { 
        id : parseInt(localStorage.getItem('id') ?? '0'),
        email: localStorage.getItem('email') ?? '', 
        wachtwoord: '',
        token: this.getToken(),
        roleId: parseInt(localStorage.getItem('role') ?? '0')
      };
    } else {
      return null;
    }
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('voornaam');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>('https://localhost:44393/api/users/authenticate', user);
  }

  register(user: Register): Observable<UserResponse> {
    console.log(user);
    console.log("arrived");
    return this.httpClient.post<UserResponse>('https://localhost:44393/api/users', user);
  }

  isBedrijfsbeheerder() {
    let bedrijfsbeheerder = localStorage.getItem('role');
    return bedrijfsbeheerder === '2';
  }

  isSuperadmin() {
    let superadmin = localStorage.getItem('role');
    return superadmin === '3';
  }
}
