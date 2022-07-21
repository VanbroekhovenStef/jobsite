import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bedrijf } from 'src/app/bedrijf/bedrijf';
import { User } from 'src/app/admin/user/user';
import { Sollicitatie } from '../sollicitatie/sollicitatie';
import { Vacature } from '../vacature';
import { VacatureService } from '../vacature.service';

@Component({
  selector: 'app-vacature',
  templateUrl: './vacature.component.html',
  styleUrls: ['./vacature.component.scss']
})
export class VacatureComponent implements OnInit {

  vacatures: Vacature[] = [];
  vacatures$: Subscription = new Subscription();
  deleteVacature$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private vacatureService: VacatureService, private router: Router) { }

  ngOnInit(): void {
    this.getVacatures();
  }

  getVacatures() {
    this.vacatures$ = this.vacatureService.getVacatures().subscribe(result => this.vacatures = result);
  }

  detail(id: number) {
    this.router.navigate(['/vacature', id])
  }

}

