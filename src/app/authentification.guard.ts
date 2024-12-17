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
    if (this.authService._is_logged() && this.authService.getRole('ROLE_ADMIN')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;  }

}
