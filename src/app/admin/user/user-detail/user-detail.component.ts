import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { Role } from '../role';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  role: Role = { id: 0, name: "" };
  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 0, foto: "", role: this.role }

  constructor(public authService: AuthService, private userService: UserService, private router: Router, private location: Location) { 
    const userId = localStorage.getItem('id');
    if (userId != null) {
      this.userService.getUserById(+userId).subscribe(result => {
        this.user = result;
        console.log(result);
      });
    }
  }

  ngOnInit(): void {

  }

  edit(id: number) {
    this.router.navigate(['/admin/user/form'], {state: {id: id, mode: 'editGebruiker'}});
  }

  back(): void {
    this.router.navigate(['/']);
  }

}
