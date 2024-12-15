import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AthentificationService } from './athentification.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getRole('ROLE_ADMIN')) {
      // Allow access for admin users
      return true;
    }
    // Logout and redirect non-admin users
    //this.authService.logOut();
    //this.router.navigate(['/login']);
    return false;
  }
}
