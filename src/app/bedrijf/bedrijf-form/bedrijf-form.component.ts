import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  isImageChanged: boolean = false;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  bedrijf$: Subscription = new Subscription();
  postBedrijf$: Subscription = new Subscription();
  putBedrijf$: Subscription = new Subscription();

  imageSrc: string = '';

  // reactive form
  bedrijfForm = new FormGroup({
    id: new FormControl(0),
    naam: new FormControl('', [Validators.required]),
    adres: new FormControl('', [Validators.required]),
    omschrijving: new FormControl('', [Validators.required]),
    foto: new FormControl(''),
    telefoon: new FormControl('', [Validators.required]),
    userId: new FormControl(0)
  });

  // Image upload
  ref: AngularFireStorageReference | undefined;
  task: AngularFireUploadTask | undefined;
  filePath = `bedrijven/`;
  imageFile: any;
  uploadProgress: number | undefined;

  constructor(private router: Router, private bedrijfService: BedrijfService, private authService: AuthService, private angularFireStorage: AngularFireStorage) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === 'edit';
    this.bedrijfId = +this.router.getCurrentNavigation()?.extras.state?.id;

    if (this.bedrijfId != null && this.bedrijfId > 0) {
      this.bedrijf$ = this.bedrijfService.getBedrijfById(this.bedrijfId).subscribe(result => {
        this.imageSrc = result.foto;
        console.log(result.foto);
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

  onImageSelected(event: any): void {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    this.filePath += randomId;
    // create a reference to the storage bucket location
    this.ref = this.angularFireStorage.ref(this.filePath);
    this.imageFile = event.target.files[0];
    this.isImageChanged = true;
  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.imageFile === undefined && this.isAdd) {
      this.isSubmitted = false;
      this.errorMessage = 'No image selected!';
    } else {
      if (this.isImageChanged) {
        this.task = this.angularFireStorage.upload(this.filePath, this.imageFile);
        this.task.snapshotChanges().subscribe(result => {
          this.ref?.getDownloadURL().subscribe(url => {
            this.bedrijfForm.patchValue({
              foto: url
            });
            if (url !== undefined) {
              this.submitData();
            }
          });
        });
        this.task.percentageChanges().subscribe(p => this.uploadProgress = p);
      } else {
        this.submitData();
      }
    }
    
  }

  submitData(): void {
    if (this.isAdd) {
      this.postBedrijf$ = this.bedrijfService.postBedrijf(this.bedrijfForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/bedrijf");
              },
              error => {
                this.isSubmitted = false;
                this.errorMessage = error.message;
              });
    }
    if (this.isEdit) {
      this.putBedrijf$ = this.bedrijfService.putBedrijf(this.bedrijfId, this.bedrijfForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/bedrijf");
              },
              error => {
                this.isSubmitted = false;
                this.errorMessage = error.message;
              });
    }
  }

}
