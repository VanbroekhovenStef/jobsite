import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  user: User = {id: 0, email: '', wachtwoord: '', token: '', roleId: 0 };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isRegister: boolean = false;
  isLogout: boolean = false;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/login': {
        this.isLogin = true;
        break;
      }
      case '/logout': {
        this.isLogout = true;
        this.authService.deleteToken();
        this.router.navigate(['']);
        break;
      }
      case '/register': {
        this.isRegister = true;
        break;
      }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;

    console.log(this.user);
    if (this.isLogin) {
      this.authService.authenticate(this.user).subscribe(result => {
        this.errorMessage = '';
        // save access token localstorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('id', result.id.toString());
        localStorage.setItem('email', result.email);
        localStorage.setItem('role', result.roleId.toString());
        localStorage.setItem('voornaam', result.voornaam);
        this.router.navigate(['']);
      }, error => {
        this.errorMessage = 'Email/password not correct!';
        this.isSubmitted = false;
      });
    } else {
      alert('work in progress');
    }
  }
}
