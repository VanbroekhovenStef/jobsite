import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Vacature } from '../vacature';
import { VacatureService } from '../vacature.service';

@Component({
  selector: 'app-vacature-list',
  templateUrl: './vacature-list.component.html',
  styleUrls: ['./vacature-list.component.scss']
})
export class VacatureListComponent implements OnInit {
  // @Input() vacature: Vacature = {id: 0, titel: "", bedrijfId: 0, omschrijving: "", kwalificaties: "", datumSluiting: ""} 
  vacatures: Vacature[] = [];
  vacatures$: Subscription = new Subscription();
  deleteVacature$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private vacatureService: VacatureService, private router: Router) { }

  ngOnInit(): void {
    this.getVacatures();
  }

  detail(id: number) {
    this.router.navigate(['/vacature', id])
  }

  ngOnDestroy(): void {
    this.vacatures$.unsubscribe();
    this.deleteVacature$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['/vacature/form'], {state: {mode: 'add'}});
  }

  edit(id: number) {
    //Navigate to form in edit mode
    this.router.navigate(['/vacature/form'], {state: {id: id, mode: 'edit'}});
  }

  delete(id: number) {
    this.deleteVacature$ = this.vacatureService.deleteVacature(id).subscribe(result => {
      //all went well
      this.getVacatures();
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  sollicitaties(id: number) {
    this.router.navigate(['sollicitatie'], {state: {id: id}})
  }

  getVacatures() {
    this.vacatures$ = this.vacatureService.getVacatures().subscribe(result => this.vacatures = result);
  }

}

