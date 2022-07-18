import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SollicitatieDetailComponent } from './sollicitatie-detail/sollicitatie-detail.component';
import { SollicitatieFormComponent } from './sollicitatie-form/sollicitatie-form.component';
import { SollicitatieListComponent } from './sollicitatie-list/sollicitatie-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SollicitatieService } from './sollicitatie.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/security.interceptor';



@NgModule({
  declarations: [
    SollicitatieFormComponent,
    SollicitatieDetailComponent,
    SollicitatieListComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    SollicitatieDetailComponent,
    SollicitatieFormComponent
  ],
  providers: [
    SollicitatieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class SollicitatieModule { }
