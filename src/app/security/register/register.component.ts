import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/admin/user/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSubmitted: boolean = false;
  errorMessage: string = '';

  user$: Subscription = new Subscription();
  postUser$: Subscription = new Subscription();

  imageSrc: string = '';

  // reactive form
  registerForm = new FormGroup({
    id: new FormControl(0),
    naam: new FormControl('', [Validators.required]),
    voornaam: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    adres: new FormControl('', [Validators.required]),
    telefoon: new FormControl('', [Validators.required]),
    linkedIn: new FormControl(''),
    roleId: new FormControl(1),
    wachtwoord: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private userService: UserService, public authService: AuthService) {

  }
  

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
  
  onSubmit(): void {
    this.isSubmitted = true;
    this.authService.register(this.registerForm.value).subscribe(result => {
      this.errorMessage = '';
      // save access token localstorage
      
      this.router.navigate(['/login']);
    }, error => {
      this.errorMessage = 'Email/password not correct!';
      this.isSubmitted = false;
    });
    
  }
  
}
