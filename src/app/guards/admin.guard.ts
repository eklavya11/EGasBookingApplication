import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate,CanActivateChild {
  constructor(private auth: AuthService,
    private router:Router,
    private alert:AlertService) { }
  canActivate() {
    if(this.auth.isAdmin()){
      return true;
    }
    this.alert.error("NO ACCESS");
    this.router.navigate(['login']);
    return false;
  }


  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAdmin();;
  }

}
