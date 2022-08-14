import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security.interceptor';
import { MenuComponent } from '../menu/menu.component';



@NgModule({
  declarations: [
    SecurityComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class SecurityModule { }
