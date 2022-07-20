import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BedrijfsbeheerderGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.checkBedrijfsbeheerderRoute();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    return this.checkBedrijfsbeheerderRoute();
  }

  checkBedrijfsbeheerderRoute(): boolean | UrlTree {
    if (this.authService.isLoggedIn() && this.authService.isBedrijfsbeheerder()) {
      return true;
    } else {
      return this.router.parseUrl('/logout')
    }
  }
  
}
