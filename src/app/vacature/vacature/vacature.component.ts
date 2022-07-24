import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bedrijf } from 'src/app/bedrijf/bedrijf';
import { User } from 'src/app/admin/user/user';
import { Sollicitatie } from '../sollicitatie/sollicitatie';
import { Vacature } from '../vacature';
import { VacatureService } from '../vacature.service';
import { Role } from 'src/app/admin/user/role';

@Component({
  selector: 'app-vacature',
  templateUrl: './vacature.component.html',
  styleUrls: ['./vacature.component.scss']
})
export class VacatureComponent implements OnInit {

  vacatures: Vacature[] = [];
  sollicitaties: Sollicitatie[] = []

  role: Role = { id: 0, name: "" };
  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 0, foto: "", role: this.role }
  bedrijf: Bedrijf = { id: 0, naam: "", omschrijving: "", userId: 0, user: this.user, adres: "", foto: "", telefoon: "", vacatures: this.vacatures }

  @Input() vacature: Vacature = { id:0 , titel: "", omschrijving: "", bedrijfId: 0, kwalificaties: "", datumSluiting: "", bedrijf: this.bedrijf, sollicitaties: this.sollicitaties }    // @Input() vacature: any;

  constructor(private vacatureService: VacatureService, private router: Router) {
    console.log(this.vacature);
   }

  ngOnInit(): void {
  }

  detail(id: number) {
    this.router.navigate(['/vacature', id])
  }

}

