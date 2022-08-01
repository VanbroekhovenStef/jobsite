import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bedrijf } from '../bedrijf/bedrijf';
import { BedrijfService } from '../bedrijf/bedrijf.service';
import { Vacature } from '../vacature/vacature';
import { VacatureService } from '../vacature/vacature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vacatures: Vacature[] = [];
  vacatures$: Subscription = new Subscription();

  bedrijven: Bedrijf[] = [];
  bedrijven$: Subscription = new Subscription();

  ascending: boolean = true;

  errorMessage: string = '';

  filterForm = new FormGroup({
    bedrijfId: new FormControl(''),
    titel: new FormControl('')
  })

  constructor(private vacatureService: VacatureService, private router: Router, private bedrijfService: BedrijfService) { 

  }

  ngOnInit(): void {
    this.getVacatures();

    this.getBedrijven();
  }

  ngOnDestroy(): void {
    this.vacatures$.unsubscribe();
    this.bedrijven$.unsubscribe();
  }

  onFilter() {
    this.getVacatures(this.filterForm.value.bedrijfId, this.filterForm.value.titel);
  }

  getVacatures(bedrijfId?: number, titel?: string) {
    this.vacatures$ = this.vacatureService.getVacatures(bedrijfId, titel, true).subscribe(result => {
      this.vacatures = result;
    });
  }

  getBedrijven() {
    this.bedrijven$ = this.bedrijfService.getBedrijven().subscribe(result => {
      this.bedrijven = result;
    });
  }

  sort() {
    if (this.ascending) {
      this.vacatures = this.vacatures.sort(
        (a, b) => 
          Number(Date.parse(a.datumSluiting)) - Number(Date.parse(b.datumSluiting))
      );
      console.log(this.vacatures)
    } else {
      this.vacatures = this.vacatures.sort(
        (a, b) => 
          Number(Date.parse(b.datumSluiting)) - Number(Date.parse(a.datumSluiting))
      );
      console.log(this.vacatures)
    }
    
    this.ascending = !this.ascending;
  }

}
