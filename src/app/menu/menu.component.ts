import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../admin/user/role';
import { User } from '../admin/user/user';
import { UserService } from '../admin/user/user.service';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  role: Role = { id: 0, name: "" };
  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 0, foto: "", role: this.role }


  constructor(public authService: AuthService, private router: Router, private userService: UserService) {
    const userId = localStorage.getItem('id');
    if (userId != null) {
      this.userService.getUserById(+userId).subscribe(result => this.user = result);
    }
   }


  ngOnInit(): void {
  }

  profielBeheren(id: number) {
      //Navigate to form in edit mode
      this.router.navigate(['/user', id]);
  }

  overzichtSollicitaties(id: number) {
      this.router.navigate(['/sollicitatie'], {state: {id: id, mode: 'gebruiker'}})
  }

  bedrijvenBeheren(id: number) {
    this.router.navigate(['bedrijf'], {state: {id: id, mode: 'beheerder'}});
  }

  bedrijvenBeherenAdmin() {
    this.router.navigate(['bedrijf']);
  }

}
