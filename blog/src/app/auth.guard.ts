import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = (typeof window !== 'undefined' && localStorage.getItem('role') === 'admin');
  
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}