import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('userId') !== null) {
      return true;
    }
    let url: string = state.url;
    sessionStorage.setItem('redirectUrl', url);
    this.router.navigate(['/public/login']);
    return false;
  }

}
