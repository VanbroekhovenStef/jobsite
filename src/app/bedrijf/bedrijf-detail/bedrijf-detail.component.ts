import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/admin/user/role';
import { User } from 'src/app/admin/user/user';
import { Vacature } from 'src/app/vacature/vacature';
import { VacatureService } from 'src/app/vacature/vacature.service';
import { Bedrijf } from '../bedrijf';
import { BedrijfService } from '../bedrijf.service';

@Component({
  selector: 'app-bedrijf-detail',
  templateUrl: './bedrijf-detail.component.html',
  styleUrls: ['./bedrijf-detail.component.scss']
})
export class BedrijfDetailComponent implements OnInit {

  vacatures: Vacature[] = [];
  role: Role = { id: 0, name: "" };
  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 0, foto: "", role: this.role }

  constructor(private vacatureService: VacatureService, private route: ActivatedRoute, private router: Router, private bedrijfService: BedrijfService, private location: Location) {
    const bedrijfId = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    bedrijfService.getBedrijfById(bedrijfId).subscribe(result => this.bedrijf = result)
    vacatureService.getVacaturesFromBedrijf(bedrijfId).subscribe(result => this.vacatures = result)
   }


  @Input() bedrijf: Bedrijf = { id: 0, naam: "", omschrijving: "", userId: 0, user: this.user, adres: "", foto: "", telefoon: "", vacatures: this.vacatures }    // @Input() vacature: any;
  
  
  ngOnInit(): void {

  }

  terug() {
    this.location.back()
  }

}
