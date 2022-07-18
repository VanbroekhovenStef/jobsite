import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BedrijfFormComponent } from "./bedrijf-form/bedrijf-form.component";
import { BedrijfListComponent } from "./bedrijf-list/bedrijf-list.component";

const routes: Routes = [
    { path: '', component: BedrijfListComponent },
    { path: 'form', component: BedrijfFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BedrijfRoutingModule {
}