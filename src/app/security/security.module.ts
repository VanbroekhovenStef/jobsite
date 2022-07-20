import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    SecurityComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SecurityModule { }
