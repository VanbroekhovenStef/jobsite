import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { Sollicitatie } from '../sollicitatie';
import { SollicitatieService } from '../sollicitatie.service';

@Component({
  selector: 'app-sollicitatie-list',
  templateUrl: './sollicitatie-list.component.html',
  styleUrls: ['./sollicitatie-list.component.scss']
})
export class SollicitatieListComponent implements OnInit {

  id: number = 0;
  isGebruiker: boolean = false;

  sollicitaties: Sollicitatie[] = [];
  sollicitaties$: Subscription = new Subscription();
  deleteSollicitatie$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private sollicitatieService: SollicitatieService, private router: Router, private authService: AuthService, private location: Location) {
    this.id = +this.router.getCurrentNavigation()?.extras.state?.id;
    this.isGebruiker = this.router.getCurrentNavigation()?.extras.state?.mode === 'gebruiker';
    console.log(this.isGebruiker)
  }

  ngOnInit(): void {
    if (this.isGebruiker) {
      this.getSollicitatiesFromUser(this.id)
    } else {
      this.getSollicitaties(this.id);
    }
  }

  ngOnDestroy(): void {
    this.sollicitaties$.unsubscribe();
    this.deleteSollicitatie$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['newsollicitatie']);
  }

  edit(id: number) {
    //TODO
    if (this.isGebruiker) {
      this.router.navigate(['editsollicitatie'], {state: {id: id, mode: 'editGebruiker'}});
    } else {
      this.router.navigate(['editsollicitatie'], {state: {id: id, mode: 'edit'}});
    }
  }

  delete(id: number) {
    this.deleteSollicitatie$ = this.sollicitatieService.deleteSollicitatie(id).subscribe(result => {
      //all went well
      this.getSollicitaties(this.id);
      if (this.isGebruiker) {
        this.router.navigate(['/sollicitatie'], {state: {id: this.authService.getUser()?.id, mode: 'gebruiker'}})
      }
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getSollicitaties(id: number) {
    this.sollicitaties$ = this.sollicitatieService.getSollicitatiesFromVacature(id).subscribe(result => this.sollicitaties = result);
  }

  getSollicitatiesFromUser(id: number) {
    this.sollicitaties$ = this.sollicitatieService.getSollicitatiesFromUser(id).subscribe(result => this.sollicitaties = result);
  }

  terug() {
    this.location.back();
  }
}
