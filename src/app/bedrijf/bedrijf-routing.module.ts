import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../security/auth.guard";
import { BedrijfDetailComponent } from "./bedrijf-detail/bedrijf-detail.component";
import { BedrijfFormComponent } from "./bedrijf-form/bedrijf-form.component";
import { BedrijfListComponent } from "./bedrijf-list/bedrijf-list.component";

const routes: Routes = [
    { path: '', component: BedrijfListComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
    { path: 'form', component: BedrijfFormComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
    { path: ':id', component: BedrijfDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BedrijfRoutingModule {
}