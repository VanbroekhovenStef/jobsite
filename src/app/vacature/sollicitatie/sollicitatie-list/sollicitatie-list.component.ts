import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sollicitatie } from '../sollicitatie';
import { SollicitatieService } from '../sollicitatie.service';

@Component({
  selector: 'app-sollicitatie-list',
  templateUrl: './sollicitatie-list.component.html',
  styleUrls: ['./sollicitatie-list.component.scss']
})
export class SollicitatieListComponent implements OnInit {

  vacatureId: number = 0;

  sollicitaties: Sollicitatie[] = [];
  sollicitaties$: Subscription = new Subscription();
  deleteSollicitatie$: Subscription = new Subscription();

  errorMessage: string = '';

  constructor(private sollicitatieService: SollicitatieService, private router: Router) {
    this.vacatureId = +this.router.getCurrentNavigation()?.extras.state?.id;
    console.log(this.vacatureId);
  }

  ngOnInit(): void {

    this.getSollicitaties(this.vacatureId);
  }

  ngOnDestroy(): void {
    this.sollicitaties$.unsubscribe();
    this.deleteSollicitatie$.unsubscribe();
  }

  add() {
    //Navigate to form in add mode
    this.router.navigate(['newsollicitatie']);
  }

  edit(id: number) {
    //TODO
    this.router.navigate(['editsollicitatie/' + id]);
  }

  delete(id: number) {
    this.deleteSollicitatie$ = this.sollicitatieService.deleteSollicitatie(id).subscribe(result => {
      //all went well
      this.getSollicitaties(this.vacatureId);
    }, error => {
      //error
      this.errorMessage = error.message;
    });
  }

  getSollicitaties(id: number) {
    this.sollicitaties$ = this.sollicitatieService.getSollicitatiesFromVacature(id).subscribe(result => this.sollicitaties = result);
  }

  // isUnpublished(sollicitatie: Article): boolean {
  //   return sollicitatie.statusId !== StatusEnum.PUBLISHED;
  // }

  // publish(articleId: number): void {
  //   this.articleService.publishArticle(articleId).subscribe(result => {
  //     this.getArticles();
  //   }, error => {
  //     //error
  //     this.errorMessage = error.message;
  //   });
  // }

}
