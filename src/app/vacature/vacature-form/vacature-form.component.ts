import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bedrijf } from 'src/app/bedrijf/bedrijf';
import { BedrijfService } from 'src/app/bedrijf/bedrijf.service';
import { User } from 'src/app/admin/user/user';
import { VacatureService } from '../vacature.service';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-vacature-form',
  templateUrl: './vacature-form.component.html',
  styleUrls: ['./vacature-form.component.scss']
})
export class VacatureFormComponent implements OnInit {

  isAdd: boolean = false;
  isEdit: boolean = false;
  vacatureId: number = 0;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  vacature$: Subscription = new Subscription();
  postVacature$: Subscription = new Subscription();
  putVacature$: Subscription = new Subscription();
  bedrijven$: Subscription = new Subscription();

  // reactive form
  vacatureForm = new FormGroup({
    id: new FormControl(0),
    titel: new FormControl(''),
    omschrijving: new FormControl(''),
    kwalificaties: new FormControl(''),
    datumSluiting: new FormControl(''),
    bedrijfId: new FormControl(0)
  });

  bedrijven: Bedrijf[] = [];

  constructor(private router: Router, private vacatureService: VacatureService, private bedrijfService: BedrijfService, private location: Location, private authService: AuthService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.vacatureId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.vacatureId != null && this.vacatureId > 0) {
      this.vacature$ = this.vacatureService.getVacatureById(this.vacatureId).subscribe(result => {
        result.datumSluiting = result.datumSluiting.substring(0, 10);
        this.vacatureForm.setValue({
          id: result.id,
          titel: result.titel,
          omschrijving: result.omschrijving,
          kwalificaties: result.kwalificaties,
          datumSluiting: result.datumSluiting,
          bedrijfId: result.bedrijfId
        });
      });
    }
  }

  ngOnInit(): void {
    this.bedrijven$ = this.bedrijfService.getBedrijvenFromUser(Number(this.authService.getUser()?.id)).subscribe(result => {
      this.bedrijven = result;
    });
    
  }

  ngOnDestroy(): void {
    this.vacature$.unsubscribe();
    this.postVacature$.unsubscribe();
    this.putVacature$.unsubscribe();
    this.bedrijven$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      console.log(this.vacatureForm.value.datumSluiting)
      this.postVacature$ = this.vacatureService.postVacature(this.vacatureForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/vacature");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putVacature$ = this.vacatureService.putVacature(this.vacatureId, this.vacatureForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/vacature");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

  terug() {
    this.location.back();
  }

}

