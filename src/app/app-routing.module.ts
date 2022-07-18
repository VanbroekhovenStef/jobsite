import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedrijfFormComponent } from './bedrijf/bedrijf-form/bedrijf-form.component';
import { BedrijfListComponent } from './bedrijf/bedrijf-list/bedrijf-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './security/auth.guard';
import { SecurityComponent } from './security/security/security.component';
import { SollicitatieFormComponent } from './vacature/sollicitatie/sollicitatie-form/sollicitatie-form.component';
import { SollicitatieListComponent } from './vacature/sollicitatie/sollicitatie-list/sollicitatie-list.component';
import { VacatureDetailComponent } from './vacature/vacature-detail/vacature-detail.component';
import { VacatureFormComponent } from './vacature/vacature-form/vacature-form.component';
import { VacatureListComponent } from './vacature/vacature-list/vacature-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bedrijf', loadChildren: () => import('./bedrijf/bedrijf.module').then(m => m.BedrijfModule), canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'login', component: SecurityComponent },
  { path: 'register', component: SecurityComponent },
  { path: 'logout', component: SecurityComponent },
  { path: 'vacature', component: VacatureListComponent },
  { path: 'vacature/form', component: VacatureFormComponent },
  { path: 'vacature/:id', component: VacatureDetailComponent },
  { path: 'sollicitatie', component: SollicitatieListComponent, canActivate: [AuthGuard] },
  { path: 'newsollicitatie', component: SollicitatieFormComponent, canActivate: [AuthGuard] },
  { path: 'editsollicitatie/:id', component: SollicitatieFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
