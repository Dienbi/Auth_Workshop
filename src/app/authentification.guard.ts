import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AthentificationService } from './athentification.service';

@Injectable({
  providedIn: 'root' // Makes this guard available throughout the app
})
export class AuthentificationGuard implements CanActivate {
  constructor(private authService: AthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService._is_logged()) {
      return true; // Allow access if the user is logged in
    }
    // Redirect to the login page if the user is not logged in
    this.router.navigate(['/login']);
    return false;
  }
}
