import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bedrijf } from 'src/app/bedrijf/bedrijf';
import { BedrijfService } from 'src/app/bedrijf/bedrijf.service';
import { AuthService } from 'src/app/security/auth.service';
import { Vacature } from '../vacature';
import { VacatureService } from '../vacature.service';

@Component({
  selector: 'app-vacature-list',
  templateUrl: './vacature-list.component.html',
  styleUrls: ['./vacature-list.component.scss']
})
export class VacatureListComponent implements OnInit {
  // @Input() vacature: Vacature = {id: 0, titel: "", bedrijfId: 0, omschrijving: "", kwalificaties: "", datumSluiting: ""} 
  vacatures: Vacature[] = [];
  bedrijven: Bedrijf[] = [];
  vacatures$: Subscription = new Subscription();
  deleteVacature$: Subscription = new Subscription();
  bedrijven$: Subscription = new Subscription();
  roleId: number = 0;
  userId: number = 0;
  errorMessage: string = '';

  constructor(private vacatureService: VacatureService, private router: Router, private bedrijfService: BedrijfService, private authService: AuthService) {
    const user = authService.getUser();
    if (user != null) {
      this.roleId = Number(user?.roleId);
      this.userId = Number(user?.id);
      if (this.roleId == 2) {
        this.getBedrijvenFromUser();
        console.log(this.bedrijven);
      } else {
        this.getVacatures();
      }
    }


   }

  ngOnInit(): void {
  }

  detail(id: number) {
    this.router.navigate(['/vacature', id])
  }

  ngOnDestroy(): void {
    this.vacatures$.unsubscribe();
    this.deleteVacature$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['/vacature/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['/vacature/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteVacature$ = this.vacatureService.deleteVacature(id).subscribe(result => {
      //all went well
      this.getVacatures();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  sollicitaties(id: number) {
    this.router.navigate(['sollicitatie'], {state: {id: id}})
  }

  getBedrijvenFromUser() {
    this.bedrijven$ = this.bedrijfService.getBedrijvenFromUser(this.userId).subscribe(result => this.bedrijven = result);
  }

  getVacatures() {
    this.vacatures$ = this.vacatureService.getVacatures().subscribe(result => this.vacatures = result);
  }

}

