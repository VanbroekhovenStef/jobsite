import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedrijfDetailComponent } from './bedrijf-detail/bedrijf-detail.component';
import { BedrijfFormComponent } from './bedrijf-form/bedrijf-form.component';
import { BedrijfListComponent } from './bedrijf-list/bedrijf-list.component';
import { SharedModule } from '../shared/shared.module';
import { BedrijfService } from './bedrijf.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from '../security/security.interceptor';
import { BedrijfRoutingModule } from './bedrijf-routing.module';



@NgModule({
  declarations: [
    BedrijfDetailComponent,
    BedrijfFormComponent,
    BedrijfListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BedrijfRoutingModule
  ],
  exports: [
    BedrijfDetailComponent,
    BedrijfFormComponent,
    BedrijfListComponent
  ],
  providers: [
    BedrijfService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class BedrijfModule { }
