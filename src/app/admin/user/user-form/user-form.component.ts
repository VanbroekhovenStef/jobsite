import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { Role } from '../role';
import { RoleService } from '../role.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  isAdd: boolean = false;
  isEditAdmin: boolean = false;
  isEditGebruiker: boolean = false;
  userId: number = 0;
  isImageChanged: boolean = false;
  
  isSubmitted: boolean = false;
  errorMessage: string = '';
  nameChangeMessage: string = '';

  user$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();
  putUser$: Subscription = new Subscription();
  roles$: Subscription = new Subscription();

  imageSrc: string = '';

  // reactive form
  userForm = new FormGroup({
    id: new FormControl(0),
    naam: new FormControl('', [Validators.required]),
    voornaam: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    adres: new FormControl('', [Validators.required]),
    telefoon: new FormControl('', [Validators.required]),
    linkedIn: new FormControl(''),
    roleId: new FormControl(0),
    foto: new FormControl(''),
    wachtwoord: new FormControl('', [Validators.required])
  });

  roles: Role[] = [];

  // Image upload
  ref: AngularFireStorageReference | undefined;
  task: AngularFireUploadTask | undefined;
  filePath = `profiel/`;
  imageFile: any;
  uploadProgress: number | undefined;

  // Document upload
  // Nog te voorzien

  constructor(private router: Router, private userService: UserService, public authService: AuthService, private angularFireStorage: AngularFireStorage, private roleService: RoleService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === 'add';
    this.isEditAdmin = this.router.getCurrentNavigation()?.extras.state?.mode === 'editAdmin';
    this.isEditGebruiker = this.router.getCurrentNavigation()?.extras.state?.mode === 'editGebruiker';
    this.userId = +this.router.getCurrentNavigation()?.extras.state?.id;
    console.log(this.isEditAdmin);

    if (this.userId != null && this.userId > 0) {
      this.user$ = this.userService.getUserById(this.userId).subscribe(result => {
        this.imageSrc = result.foto;
        console.log(result.foto)
        this.userForm.setValue({
          id: result.id,
          naam: result.naam,
          voornaam: result.voornaam,
          email: result.email,
          adres: result.adres,
          linkedIn: result.linkedIn,
          telefoon: result.telefoon,
          roleId: result.roleId,
          foto: result.foto,
          wachtwoord: result.wachtwoord
        });
      });
    }
  }

  ngOnInit(): void {
    this.roles$ = this.roleService.getRoles().subscribe(result => {
      this.roles = result;
    })
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
    this.postUser$.unsubscribe();
    this.putUser$.unsubscribe();
    this.roles$.unsubscribe();
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
    if (this.isImageChanged) {
      this.task = this.angularFireStorage.upload(this.filePath, this.imageFile);
      this.task.snapshotChanges().subscribe(result => {
        this.ref?.getDownloadURL().subscribe(url => {
          this.userForm.patchValue({
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

  submitData(): void {
    if (this.isAdd) {
      this.postUser$ = this.userService.postUser(this.userForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/user");
              },
              error => {
                this.isSubmitted = false;
                this.errorMessage = error.message;
              });
    }
    if (this.isEditAdmin) {
      this.putUser$ = this.userService.putUser(this.userId, this.userForm.value).subscribe(result => {
                //all went well
                this.router.navigateByUrl("/admin/user");
              },
              error => {
                this.isSubmitted = false;
                this.errorMessage = error.message;
              });
    }
    if (this.isEditGebruiker) {
      this.putUser$ = this.userService.putUser(this.userId, this.userForm.value).subscribe(result => {
        //all went well
        this.router.navigate(['/admin/user', this.userId])
      },
      error => {
        this.isSubmitted = false;
        this.errorMessage = error.message;
      });
    }
  }

}
