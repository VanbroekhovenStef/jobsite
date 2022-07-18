import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacatureListComponent } from './vacature-list/vacature-list.component';
import { VacatureFormComponent } from './vacature-form/vacature-form.component';
import { VacatureDetailComponent } from './vacature-detail/vacature-detail.component';
import { SharedModule } from '../shared/shared.module';
import { VacatureService } from './vacature.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { VacatureComponent } from './vacature/vacature.component';
import { SollicitatieModule } from './sollicitatie/sollicitatie.module';



@NgModule({
  declarations: [
    VacatureListComponent,
    VacatureFormComponent,
    VacatureDetailComponent,
    VacatureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SollicitatieModule
  ],
  exports: [
    VacatureDetailComponent,
    VacatureFormComponent,
    VacatureListComponent,
    VacatureComponent
  ],
  providers: [
    VacatureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class VacatureModule { }
