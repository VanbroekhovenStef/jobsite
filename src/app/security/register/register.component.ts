import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/admin/user/role';
import { User } from 'src/app/admin/user/user';
import { UserService } from 'src/app/admin/user/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  role: Role = { id: 1, name: "Gebruiker" }
  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 1, foto: "", role: this.role }

  isSubmitted: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.authService.register(this.user).subscribe(result => {
      this.errorMessage = '';
      // save access token localstorage
      
      this.router.navigate(['/login']);
    }, error => {
      this.errorMessage = 'Email/password not correct!';
      this.isSubmitted = false;
    });

  }
  
}
