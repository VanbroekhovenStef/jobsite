import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../security/auth.guard";
import { SuperadminGuard } from "../security/superadmin.guard";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { UserListComponent } from "./user/user-list/user-list.component";

const routes: Routes = [
    { path: 'user', component: UserListComponent, canActivate: [SuperadminGuard] },
    { path: 'user/form', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: 'user/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {
  }