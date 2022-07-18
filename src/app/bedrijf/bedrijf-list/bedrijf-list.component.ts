import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  errorMessage: string = '';

  constructor(private bedrijfService: BedrijfService, private router: Router) {
  }

  ngOnInit(): void {
    this.getBedrijven();
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
      this.getBedrijven();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getBedrijven() {
    this.bedrijven$ = this.bedrijfService.getBedrijven().subscribe(result => this.bedrijven = result);
  }

}
