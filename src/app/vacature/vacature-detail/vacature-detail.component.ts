import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bedrijf } from 'src/app/bedrijf/bedrijf';
import { User } from 'src/app/user/user';
import { Sollicitatie } from '../sollicitatie/sollicitatie';
import { Vacature } from '../vacature';
import { VacatureService } from '../vacature.service';

@Component({
  selector: 'app-vacature-detail',
  templateUrl: './vacature-detail.component.html',
  styleUrls: ['./vacature-detail.component.scss']
})
export class VacatureDetailComponent implements OnInit {

  constructor(private vacatureService: VacatureService, private route: ActivatedRoute, private router: Router) { }


  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 0 }
  bedrijf: Bedrijf = { id: 0, naam: "", omschrijving: "", userId: 0, user: this.user, adres: "", foto: "", telefoon: "" }
  sollicitaties: Sollicitatie[] = []

  @Input() vacature: Vacature = { id:0, titel: "", omschrijving: "", bedrijfId: 0, kwalificaties: "", datumSluiting: "", bedrijf: this.bedrijf, sollicitaties: this.sollicitaties }    // @Input() vacature: any;
  
  
  ngOnInit(): void {
    const vacatureId = this.route.snapshot.paramMap.get('id');
    if (vacatureId != null) {
      this.vacatureService.getVacatureById(+vacatureId).subscribe(result => this.vacature = result);
    }
  }

  solliciteren(id: number) {
    this.router.navigate(['/newsollicitatie'], {state: {vacatureId: id, mode: 'add'}});
  }

  terug() {
    this.router.navigate(['/vacature'])
  }

}

