import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { extractQuerystring } from '@firebase/util';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/security/auth.service';
import { Bedrijf } from '../bedrijf';
import { BedrijfService } from '../bedrijf.service';

@Component({
  selector: 'app-bedrijf-list',
  templateUrl: './bedrijf-list.component.html',
  styleUrls: ['./bedrijf-list.component.scss']
})
export class BedrijfListComponent implements OnInit {

  bedrijven: Bedrijf[] = [];
  bedrijven$: Subscription = new Subscription();
  deleteBedrijf$: Subscription = new Subscription();
  roleId: number = 0;
  userId: number = 0;

  errorMessage: string = '';

  constructor(private bedrijfService: BedrijfService, private router: Router, private authService: AuthService) {
    const user = authService.getUser();
    if (user != null) {
      this.userId = user.id;
      this.roleId = user.roleId;
      if (this.roleId == 2) {
        this.getBedrijvenFromUser();
      } else {
        this.getBedrijven();
      }
    }
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.bedrijven$.unsubscribe();
    this.deleteBedrijf$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['bedrijf/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['bedrijf/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteBedrijf$ = this.bedrijfService.deleteBedrijf(id).subscribe(result => {
      //all went well
      if (this.userId != null && this.userId == 2) {
        this.getBedrijvenFromUser()
      } else {
        this.getBedrijven();
      }
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getBedrijvenFromUser() {
    this.bedrijven$ = this.bedrijfService.getBedrijvenFromUser(this.userId).subscribe(result => this.bedrijven = result);
  }

  getBedrijven() {
    this.bedrijven$ = this.bedrijfService.getBedrijven().subscribe(result => this.bedrijven = result);
  }

}
