import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { SollicitatieService } from '../sollicitatie.service';

@Component({
  selector: 'app-sollicitatie-form',
  templateUrl: './sollicitatie-form.component.html',
  styleUrls: ['./sollicitatie-form.component.scss']
})
export class SollicitatieFormComponent implements OnInit {

  sollicitatieId: number = 0;
  vacatureId: number = 0;
  isAdd: boolean = false;
  isEdit: boolean = false;
  isEditGebruiker: boolean = false;
  isEditDetail: boolean = false;

  isSubmitted: boolean = false;
  errorMessage: string = '';

  sollicitatie$: Subscription = new Subscription();
  postSollicitatie$: Subscription = new Subscription();
  putSollicitatie$: Subscription = new Subscription();

  // imageSrc: string = '';

  sollicitatieForm = new FormGroup({
    id: new FormControl(''),
    userId: new FormControl(''),
    vacatureId: new FormControl(''),
    motivatie: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sollicitatieService: SollicitatieService,
              private authService: AuthService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode ==='edit';
    this.isEditGebruiker = this.router.getCurrentNavigation()?.extras.state?.mode ==='editGebruiker';
    this.isEditDetail = this.router.getCurrentNavigation()?.extras.state?.mode ==='editDetail';
    this.vacatureId = +this.router.getCurrentNavigation()?.extras.state?.vacatureId;
    console.log(this.vacatureId);
    this.sollicitatieId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.sollicitatieId != null && this.sollicitatieId > 0) {
      this.sollicitatie$ = this.sollicitatieService.getSollicitatieById(this.sollicitatieId).subscribe(result => {
        console.log(result);
        this.sollicitatieForm.setValue({
          id: result.id,
          motivatie: result.motivatie,
          userId: result.userId,
          vacatureId: result.vacatureId
        })
      })
    } else {
      const user = this.authService.getUser() ?? null;

      if (user !== null) {
        this.sollicitatieForm.patchValue({
          id: 0,
          userId: user.id,
          vacatureId: this.vacatureId
        });
      }
    }
  }
  ngOnInit(): void {
    
  }

  terug(id: number) {
    this.router.navigate(['/vacature', id])
  }

  ngOnDestroy(): void {
    this.sollicitatie$.unsubscribe();
    this.postSollicitatie$.unsubscribe();
    this.putSollicitatie$.unsubscribe();
  }

  getTitle(): string {
    if (this.isAdd) {
      return 'Solliciteren';
    } else {
      return 'Sollicitatie bewerken';
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.submitData();
  }

  submitData(): void {
    if (this.isAdd) {
      //Add
      this.postSollicitatie$ = this.sollicitatieService.postSollicitatie(this.sollicitatieForm.value).subscribe(result => {
          this.router.navigateByUrl('/');
        },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    } 
    else {
      //edit
      console.log(this.sollicitatieForm.value);
      this.putSollicitatie$ = this.sollicitatieService.putSollicitatie(this.sollicitatieId, this.sollicitatieForm.value).subscribe(result => {
        if(this.isEditGebruiker) {
          this.router.navigate(['/sollicitatie'], {state: {id: this.authService.getUser()?.id, mode: 'gebruiker'}})
        }
        else if(this.isEditDetail) {

          this.router.navigate(['/vacature', this.sollicitatieForm.value.vacatureId])
        }
        else {
          this.router.navigate(['/sollicitatie'], {state: {id: this.sollicitatieId}})
        }
      },
        error => {
          this.isSubmitted = false;
          this.errorMessage = error.message;
        });
    }

    }
  }

