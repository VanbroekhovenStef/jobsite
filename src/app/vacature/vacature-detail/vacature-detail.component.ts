import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bedrijf } from 'src/app/bedrijf/bedrijf';
import { User } from 'src/app/admin/user/user';
import { Sollicitatie } from '../sollicitatie/sollicitatie';
import { Vacature } from '../vacature';
import { VacatureService } from '../vacature.service';
import { Role } from 'src/app/admin/user/role';
import { SollicitatieService } from '../sollicitatie/sollicitatie.service';

@Component({
  selector: 'app-vacature-detail',
  templateUrl: './vacature-detail.component.html',
  styleUrls: ['./vacature-detail.component.scss']
})
export class VacatureDetailComponent implements OnInit {

  heeftGesolliciteerd: boolean = false;
  sollicitatieId: number = 0;
  vacatures: Vacature[] = [];

  constructor(private vacatureService: VacatureService, private route: ActivatedRoute, private router: Router, private sollicitatieService: SollicitatieService) {
    const userId = Number(localStorage.getItem('id')) ?? 0;
    const vacatureId = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    console.log(userId, vacatureId);
    sollicitatieService.getSollicitatiesOnVacatureFromUser(userId, vacatureId).subscribe(result => {
      this.heeftGesolliciteerd = result != null;
      this.sollicitatieId = result.id;
      console.log(result);
      console.log(this.heeftGesolliciteerd);
    })
   }

  role: Role = { id: 0, name: "" };
  user: User = { id: 0, naam: "", voornaam: "", email: "", wachtwoord: "", adres: "", telefoon: "", cv: "", linkedIn: "", roleId: 0, foto: "", role: this.role }
  bedrijf: Bedrijf = { id: 0, naam: "", omschrijving: "", userId: 0, user: this.user, adres: "", foto: "", telefoon: "", vacatures: this.vacatures }
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

  edit(id: number) {
    this.router.navigate(['editsollicitatie'], {state: {id: this.sollicitatieId, mode: 'editDetail'}});
  }

  terug() {
    this.router.navigate(['/'])
  }

}

