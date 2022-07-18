import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { BedrijfService } from '../bedrijf.service';

@Component({
  selector: 'app-bedrijf-form',
  templateUrl: './bedrijf-form.component.html',
  styleUrls: ['./bedrijf-form.component.scss']
})
export class BedrijfFormComponent implements OnInit {

  isAdd: boolean = false;
  isEdit: boolean = false;
  bedrijfId: number = 0;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  bedrijf$: Subscription = new Subscription();
  postBedrijf$: Subscription = new Subscription();
  putBedrijf$: Subscription = new Subscription();

  // reactive form
  bedrijfForm = new FormGroup({
    id: new FormControl(0),
    naam: new FormControl(''),
    adres: new FormControl(''),
    omschrijving: new FormControl(''),
    foto: new FormControl(''),
    telefoon: new FormControl(''),
    userId: new FormControl(0)
  });

  constructor(private router: Router, private bedrijfService: BedrijfService, private authService: AuthService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.bedrijfId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.bedrijfId != null && this.bedrijfId > 0) {
      this.bedrijf$ = this.bedrijfService.getBedrijfById(this.bedrijfId).subscribe(result => {
        this.bedrijfForm.setValue({
          id: result.id,
          naam: result.naam,
          adres: result.adres,
          omschrijving: result.omschrijving,
          foto: result.foto,
          telefoon: result.telefoon,
          userId: result.userId
        });
      });
    }
  }

  ngOnInit(): void {
    const user = this.authService.getUser() ?? null;
    if (user !== null) {
      this.bedrijfForm.patchValue({
        userId: user.id,
      });
    }
  }

  ngOnDestroy(): void {
    this.bedrijf$.unsubscribe();
    this.postBedrijf$.unsubscribe();
    this.putBedrijf$.unsubscribe();
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postBedrijf$ = this.bedrijfService.postBedrijf(this.bedrijfForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/bedrijf");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putBedrijf$ = this.bedrijfService.putBedrijf(this.bedrijfId, this.bedrijfForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/bedrijf");
              },
              error => {
                this.errorMessage = error.message;
              });
    }
  }

}
