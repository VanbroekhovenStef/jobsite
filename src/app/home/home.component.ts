import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vacature } from '../vacature/vacature';
import { VacatureService } from '../vacature/vacature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // vacatures: Vacature[] = [];
  // vacatures$: Subscription = new Subscription();
  // deleteVacature$: Subscription = new Subscription();

  // errorMessage: string = '';

  constructor(private vacatureService: VacatureService, private router: Router) { }

  ngOnInit(): void {
    // this.getVacatures();
  }

  // getVacatures() {
  //   this.vacatures$ = this.vacatureService.getVacatures().subscribe(result => this.vacatures = result);
  // }
}
